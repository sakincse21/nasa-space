"use client";
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
import { useEffect, useState } from "react";

export default function CupolaPage() {
  const [items, setItems] = useState([]);

  useEffect(async () => {
    const res = await fetch(
      "https://images-api.nasa.gov/search?q=cupola&media_type=image"
    );
    const data = await res.json();

    const items = data.collection.items;

    const randomIndex = Math.floor(Math.random() * items.length);
    const randomItem = items.slice(randomIndex, randomIndex + 12);

    setItems(randomItem);
  }, []);
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-2xl text-cyan-300">Cupola Image</h1>
      {items.length == 0 ? (
        <p className="text-4xl">Loading...</p>
      ) : (
        <div className="w-full p-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {items?.map((item) => (
            <div key={item.links[0].href}>
              <Dialog>
                <DialogTrigger>
                  <TiltEffect>
                    <Card className="overflow-hidden pt-0 md:w-[280px]">
                      <img
                        src={item.links[0].href}
                        alt="cupola"
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
                <DialogContent>
                  <DialogHeader>
                    <div className="w-full p-5">
                      <img
                        src={item.links[0].href}
                        alt="cupola"
                        className="w-full h-[240px] object-cover"
                      />
                    </div>
                    <DialogTitle>
                      <span className="text-xl">{item?.data[0]?.title}</span>
                    </DialogTitle>
                    <DialogDescription>
                      <span className="text-muted-foreground text-sm">
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
      <Button variant={"destructive"}>See Another</Button>
    </div>
  );
}
