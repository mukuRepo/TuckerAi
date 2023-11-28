import ParticleComponent from '@/components/ParticleComponent';
import Link from 'next/link';

const Home: React.FC = () => {
  return (
    <section className="relative blockz-1 mt-44">
      <ParticleComponent/>  
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center">
          <div className="w-full px-4 -mt-24 lg:w-12/12">
            <div className="flex flex-wrap">
              <div className="w-full px-4 lg:w-4/12">
                <h5 className="pb-4 text-xl font-semibold text-center">
                  Custom Detection
                </h5>
                <Link href="/">
                  <div className="relative flex flex-col w-full min-w-0 mb-6 text-gray-700 break-words transition-all duration-150 ease-linear bg-white border-2 border-black rounded-lg shadow-lg hover:text-white hover:bg-blue-300 hover:-mt-4">
                    <img
                      alt="Custom Detection"
                      className="h-auto max-w-full align-middle border-2 border-black rounded-lg"
                      src="https://source.unsplash.com/400x300/?ai,ml,45"
                    />
                    <div className="p-4">
                      <p className="text-center">
                        Explore our custom detection solutions tailored to your specific needs. Our advanced AI algorithms ensure accurate and efficient detection in various domains.
                      </p>
                    </div>
                  </div>
                </Link>
              </div>

              <div className="w-full px-4 lg:w-4/12">
                <h5 className="pb-4 text-xl font-semibold text-center">
                  Human AI Development
                </h5>
                <Link href="/">
                  <div className="relative flex flex-col w-full min-w-0 mb-6 text-gray-700 break-words transition-all duration-150 ease-linear bg-white border-2 border-black rounded-lg shadow-lg hover:text-white hover:bg-pink-300 hover:-mt-4">
                    <img
                      alt="Human AI Development"
                      className="h-auto max-w-full align-middle border-none rounded-lg "
                      src="https://source.unsplash.com/400x300/?ai,ml,28"
                    />
                    <div className="p-4">
                      <p className="text-center">
                        Dive into the world of Human AI Development. Our experts harness the power of machine learning to create intelligent solutions that interact seamlessly with human behavior.
                      </p>
                    </div>
                  </div>
                </Link>
              </div>

              <div className="w-full px-4 lg:w-4/12">
                <h5 className="pb-4 text-xl font-semibold text-center">
                  Web3 Development
                </h5>
                <Link href="/">
                  <div className="relative flex flex-col w-full min-w-0 mb-6 text-gray-700 break-words transition-all duration-150 ease-linear bg-white border-2 border-black rounded-lg shadow-lg hover:text-white hover:bg-green-300 hover:-mt-4">
                    <img
                      alt="Web3 Development"
                      className="h-auto max-w-full align-middle border-none rounded-lg"
                      src="https://source.unsplash.com/400x300/?ai,ml,25"
                    />
                    <div className="p-4">
                      <p className="text-center">
                        Embrace the future with our cutting-edge Web3 Development solutions. We leverage the latest advancements in artificial intelligence and machine learning to build decentralized applications.
                      </p>
                    </div>
                  </div>
                </Link>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
