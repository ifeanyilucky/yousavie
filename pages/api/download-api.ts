import type { NextApiRequest, NextApiResponse } from 'next';
import ytdl from 'ytdl-core';

export default async function downloadApi(
  req: NextApiRequest,
  res: NextApiResponse
) {
  //   const info = ytdl.getInfo();
  //   https://youtu.be/ubupRhP_oTc
  const { url } = req.body;
  let videoCode: string;
  videoCode = url.split('v=')[1].substr(0, 11);
  if (!videoCode) {
    const string = url.split('.be/')[1];
    videoCode = string.substr(0, 11);
  }
  console.log(videoCode);
  let info;
  if (videoCode) {
    info = await ytdl.getInfo(videoCode);
  }

  //   if (!info) {
  //     res.status(503).json({ msg: 'You have submitted the wrong youtube URL' });
  //   }

  const sortedInfo = info?.formats.sort((a, b) => {
    return a.mimeType < b.mimeType;
  });

  res.status(200).json({
    url: `https://www.youtube.com/embed${videoCode}`,
    data: sortedInfo,
    info: {
      description: info?.videoDetails.description,
      title: info?.videoDetails.title,
      urlEmbed: info?.videoDetails.embed.iframeUrl,
      thumbnail: `http://img.youtube.com/vi/${videoCode}/0.jpg`,
      duration: info?.videoDetails.viewCount,
    },
    fullInfo: info,
  });
}
