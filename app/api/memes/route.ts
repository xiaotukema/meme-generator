import { NextResponse } from 'next/server';
import axios from 'axios';

// Reddit API 配置
const REDDIT_CLIENT_ID = process.env.REDDIT_CLIENT_ID;
const REDDIT_CLIENT_SECRET = process.env.REDDIT_CLIENT_SECRET;

// YouTube API 配置
const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;

// TikTok API 配置
const TIKTOK_API_KEY = process.env.TIKTOK_API_KEY;

// 从 Reddit 获取热门 meme
async function getRedditMemes() {
  try {
    // 首先获取访问令牌
    const authResponse = await axios.post(
      'https://www.reddit.com/api/v1/access_token',
      `grant_type=client_credentials`,
      {
        auth: {
          username: REDDIT_CLIENT_ID!,
          password: REDDIT_CLIENT_SECRET!
        },
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }
    );

    // 使用访问令牌获取热门 meme
    const response = await axios.get('https://oauth.reddit.com/r/memes/hot', {
      headers: {
        'Authorization': `Bearer ${authResponse.data.access_token}`,
        'User-Agent': 'MemeGenerator/1.0'
      }
    });

    return response.data.data.children.map((post: any) => ({
      id: post.data.id,
      title: post.data.title,
      imageUrl: post.data.url,
      source: 'Reddit',
      upvotes: post.data.ups,
      url: `https://reddit.com${post.data.permalink}`,
    }));
  } catch (error) {
    console.error('Error fetching Reddit memes:', error);
    return [];
  }
}

// 从 YouTube 获取热门 meme 视频
async function getYouTubeMemes() {
  try {
    const response = await axios.get(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&q=meme&type=video&maxResults=10&key=${YOUTUBE_API_KEY}`
    );

    return response.data.items.map((item: any) => ({
      id: item.id.videoId,
      title: item.snippet.title,
      imageUrl: item.snippet.thumbnails.high.url,
      source: 'YouTube',
      url: `https://www.youtube.com/watch?v=${item.id.videoId}`,
    }));
  } catch (error) {
    console.error('Error fetching YouTube memes:', error);
    return [];
  }
}

// 从 TikTok 获取热门 meme 视频
async function getTikTokMemes() {
  try {
    const response = await axios.get(
      `https://open.tiktokapis.com/v2/research/video/query/?fields=id,title,cover_image_url,share_url&hashtag_name=memes&max_count=10`,
      {
        headers: {
          'Authorization': `Bearer ${TIKTOK_API_KEY}`,
        },
      }
    );

    return response.data.data.videos.map((video: any) => ({
      id: video.id,
      title: video.title,
      imageUrl: video.cover_image_url,
      source: 'TikTok',
      url: video.share_url,
    }));
  } catch (error) {
    console.error('Error fetching TikTok memes:', error);
    return [];
  }
}

export async function GET() {
  try {
    // 并行获取所有平台的 meme
    const [redditMemes, youtubeMemes, tiktokMemes] = await Promise.all([
      getRedditMemes(),
      getYouTubeMemes(),
      getTikTokMemes(),
    ]);

    // 合并所有 meme 并按时间排序
    const allMemes = [...redditMemes, ...youtubeMemes, ...tiktokMemes]
      .sort((a, b) => Math.random() - 0.5); // 随机排序

    return NextResponse.json({ memes: allMemes });
  } catch (error) {
    console.error('Error fetching memes:', error);
    return NextResponse.json(
      { error: 'Failed to fetch memes' },
      { status: 500 }
    );
  }
} 