import { BreadCrumb, Button, Card, Filters, Footer } from "./_components";


export default function Home() {
  return (
    <div className="max-w-screen-xl mx-auto px-4 py-4">
      {/* breadcrumb */}
      <BreadCrumb />
      {/* description about themes */}

      <div className="flex flex-col space-y-3 border-b my-4 pb-8 border-bordergray  ">
        <h1 className="text-2xl font-bold">
          Python starter templates and themes
        </h1>

        <p className="text-graylight">
          The studio-quality three-mic array is designed to reduce feedback, so
          The studio-quality three-mic array is designed to reduce feedback , so
          means everyone hears you - not what&apos;s going on around you means
          everyone hears you - not what&apos;s going on around.
        </p>
      </div>

      {/* filters */}
      <Filters/>
     


      {/* Card */}
      <div>
        <Card/>
      </div>
      {/* footer */}

      <div>
        <Footer/>

      </div>



    </div>
  );
}
