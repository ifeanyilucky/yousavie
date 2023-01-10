import { useState } from 'react';
import Image from 'next/image';
import _ from 'lodash';
import {
  ArrowDownTrayIcon,
  ChevronDownIcon,
} from '@heroicons/react/24/outline';
import axios from 'axios';
import FileDownload from 'js-file-download';
import Search from './Search';
import Loader from './Loader';
import DownloadTable from './DownloadTable';
import DropdownButton from './DropdownButton';

export default function Hero() {
  const [info, setInfo] = useState<null | any>(null);
  const [dlFormat, setDlFormat] = useState<number>(0);
  console.log(info);

  const handleSelectedFormat = (selected) => {
    setDlFormat(selected);
  };
  let videos: any;
  if (info) {
    const vidsWithAudios = info.data.filter((i) => i.hasAudio === true);
    videos = vidsWithAudios.filter((i) => i.hasVideo === true);
  }
  const handleDownload = () => {
    console.log(videos[dlFormat]?.url);

    axios
      .get(videos[dlFormat]?.url, {
        responseType: 'blob',
      })
      .then((response) => {
        // FileDownload(response.data);
        console.log(response);
      });
  };
  return (
    <div className='font-ytdgt'>
      <Search info={info} setInfo={setInfo} />
      {info && videos ? (
        <div className='flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700'>
          <img
            className='object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg'
            src={info.info.thumbnail}
            alt={info.info.title}
          />
          <div className='flex flex-col justify-between p-4 leading-normal'>
            <h5 className='mb-2 text-lg font-bold tracking-tight text-gray-900 '>
              {_.truncate(info.info.title, { length: 35 })}
            </h5>

            <div className='inline-flex rounded-md shadow-sm' role='group'>
              <a
                type='button'
                className='inline-flex items-center py-2 px-4 text-sm font-medium  bg-indigo-500 rounded-l-lg border focus:z-10 focus:ring-2  dark:border-white focus:bg-gray-200'
                onClick={handleDownload}
              >
                <ArrowDownTrayIcon />
                DOWNLOAD
              </a>
              <DropdownButton
                items={videos}
                handleSelectedFormat={handleSelectedFormat}
              >
                {info?.data[dlFormat]?.qualityLabel}
              </DropdownButton>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
