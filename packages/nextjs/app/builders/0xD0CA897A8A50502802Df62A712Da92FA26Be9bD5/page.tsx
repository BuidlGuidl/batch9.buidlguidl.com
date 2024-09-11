import { Bio, Buidls } from "./_components";

const myAddress = "0xD0CA897A8A50502802Df62A712Da92FA26Be9bD5";

const Milady = () => {
  return (
    <div
      style={{
        flexGrow: 1,
        backgroundImage: "url('https://www.miladymaker.net/milady/2208.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
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

export default Milady;
