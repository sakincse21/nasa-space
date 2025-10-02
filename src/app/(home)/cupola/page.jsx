import { Button } from "@/components/ui/button";
import { TiltEffect } from "@/components/ui/tilt-effect";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";

export default async function CupolaPage() {
  const res = await fetch(
    "https://images-api.nasa.gov/search?q=cupola&media_type=image",
    {
      cache: "force-cache"
    }
  );
  const data = await res.json();

  const items2 = data.collection.items;

  const randomIndex = Math.floor(Math.random() * items2.length);
  const randomItem = items2.slice(randomIndex, randomIndex + 12);

  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
\      <h1
        className="text-center text-5xl overflow-hidden transition-all duration-500 w-full [filter:drop-shadow(0_0_23px_#ff3737)]"
        style={{
          color: '#ff3737',
          WebkitTextStroke: `1px #ff3737`,
        }}
      >Cupola Images</h1>
      {randomItem.length == 0 ? (
        <div className="w-full h-full flex justify-center items-center">
          No Images Found
        </div>
      ) : (
        <div className="w-full h-full p-8 flex flex-col sm:flex-row flex-wrap justify-center items-center gap-5">
          {randomItem?.map((item) => (
            <div key={item.links[0].href}>
              <Dialog>
                <DialogTrigger>
                  <TiltEffect>
                    <Card className="overflow-hidden pt-0 md:w-md">
                      
                      <Image
                        src={item.links[0].href}
                        // placeholder="blur"
                        // blurDataURL="https://images-assets.nasa.gov/image/iss036e007470/iss036e007470~medium.jpg"
                        alt="cupola"
                        width={240}
                        height={240}
                        className="w-full h-[240px] object-cover"
                      />
                      <CardContent className="mt-2">
                        <div className="text-xl text-start">
                          {item?.data[0]?.title.slice(0, 12)}...
                        </div>
                        {/* <div className="text-muted-foreground text-sm text-start">
                        {item?.data[0]?.description.slice(0, 40)}...
                      </div> */}
                      </CardContent>
                    </Card>
                  </TiltEffect>
                </DialogTrigger>
                <DialogContent >
                  <DialogHeader >
                    <div className="w-full p-5">
                      <img
                        src={item.links[0].href}
                        alt="cupola"
                        className="w-full h-[240px] object-cover drop-shadow-red-700 drop-shadow-xl"
                      />
                    </div>
                    <DialogTitle>
                      <span className="text-2xl">{item?.data[0]?.title}</span>
                    </DialogTitle>
                    <DialogDescription>
                      <span className="text-muted-foreground text-lg">
                        {item?.data[0]?.description}
                      </span>
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
