import {
  BoltIcon,
  ChatBubbleBottomCenterTextIcon,
  GlobeAltIcon,
  ScaleIcon,
  ArrowDownTrayIcon
} from '@heroicons/react/24/outline';

interface IState{
  features: {
    name: string,
    description: string,
    icon?: string 
  }[]
}

const features: IState["features"] = [
  {
    name: 'Easy To Use',
    description:
      'All you have to do is copy & paste the URL link of your favorite social video in the above search box. After that, we will do the rest!',
    icon: GlobeAltIcon,
  },
  {
    name: 'No App Install Needed',
    description:
      'No application is needed, and no installing software is required! Just copy the video URL link and paste it to GiveFastLink online downloader.',
    icon: ScaleIcon,
  },
  {
    name: 'Highest Quality Videos',
    description:
      'Depending on each video, available qualities may be different, but we guarantee you that the GiveFastLink gives you all qualities From 720p, 1080 Full HD to 4K.',
    icon: BoltIcon,
  },
  {
    name: '100% Free',
    description:
      'The good news is that the GiveFastLink tool is full-free, so you don’t need to have a credit card or make any payment to use downloaders.',
    icon: ChatBubbleBottomCenterTextIcon,
  },
];

export default function Feature() {
  return (
    <section className='container px-10'>
      <div className='bg-white py-12'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div className='lg:text-center'>
            <h2 className='text-lg font-semibold text-indigo-600'>Yousavie</h2>
            <p className='mt-2 text-5xl font-bold leading-8 tracking-tight text-gray-900 sm:text-2xl md:text-5xl'>
              Best online youtube downloader
            </p>
            <p className='mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto'>
              Download youtube videos with a high-quality MP4/MP3 in the
              Yousavie video downloader for 100% free, easy-to-use, and
              unlimited.
            </p>
          </div>

          <div className='mt-10'>
            <dl className='space-y-10 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 md:space-y-0'>
              {features.map((feature) => (
                <div key={feature.name} className='relative'>
                  <dt>
                    <div className='absolute flex h-12 w-12 items-center justify-center rounded-md bg-indigo-500 text-white'>
                      <feature.icon className='h-6 w-6' aria-hidden='true' />
                    </div>
                    <p className='ml-16 text-lg font-medium leading-6 text-gray-900'>
                      {feature.name}
                    </p>
                  </dt>
                  <dd className='mt-2 ml-16 text-base text-gray-500'>
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>{' '}
    </section>
  );
}
