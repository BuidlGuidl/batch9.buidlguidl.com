import { Bio, Buidls } from "./_components";
import { NextPage } from "next";

const myAddress = "0xD0CA897A8A50502802Df62A712Da92FA26Be9bD5";

const ArjanJohanPage: NextPage = () => {
  return (
    <div
      style={{
        backgroundImage: "url('https://www.miladymaker.net/milady/2208.png')",
      }}
      className="flex flex-grow justify-center items-center bg-cover bg-center"
    >
      <div className="flex justify-center pt-10">
        <div className="w-full max-w-screen-lg p-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="col-span-1 h-full">
              <div className="bg-base-100/60 p-6 rounded-3xl shadow-lg h-full">
                <Bio address={myAddress} />
              </div>
            </div>
            <div className="col-span-1 h-full">
              <div className="bg-base-100/50 p-6 rounded-3xl shadow-lg h-full">
                <p>
                  <b>some of my buidls</b>
                </p>
                <Buidls />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArjanJohanPage;
