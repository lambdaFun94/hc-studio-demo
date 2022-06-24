import cx from "classnames";
import * as React from "react";
import { useState } from "react";
import Card from "./Card";
import Grid from "./Grid";
import Img, { Image } from "./Img";
import Section from "./Section";

type Props = {
  //Insert Props Here
  className?: string;
  title: string;
  items?: {
    id: string;
    name: string;
    slug: string;
    image?: Image;
    subtitle?: string;
  }[];
};

const GridSection = ({ className, title, items }: Props) => {
  const [showAll, setShowAll] = useState(false);

  if (!items?.length || items.length === 0) return null;
  return (
    <div className={cx(className)}>
      <Section title={title}>
        <Grid>
          {items
            ?.filter((item, i) => {
              if (showAll) {
                return true;
              } else {
                return i < 12;
              }
            })
            .map((item) => (
              <Card key={item.id} href={item.slug}>
                <div className="flex gap-2">
                  {item.image && (
                    <div className="flex-none">
                      <Img
                        width={40}
                        image={item.image}
                        layout="fixed"
                        className="rounded-md drop-shadow-md"
                      />
                    </div>
                  )}
                  <div>
                    <div className="font-medium">{item.name}</div>
                    {item.subtitle && item.subtitle.length > 0 && (
                      <div className="text-gray-700 text-sm">
                        {item.subtitle}
                      </div>
                    )}
                  </div>
                </div>
              </Card>
            ))}
        </Grid>

        {!showAll && items.length > 12 && (
          <div className="flex items-center justify-center p-4">
            <button
              className="px-4 py-1 bg-gray-100 rounded-full text-sm hover:bg-gray-300 border border-gray-200"
              onClick={() => setShowAll(true)}
            >
              Show All {items.length.toLocaleString()} {title}
            </button>
          </div>
        )}
      </Section>
    </div>
  );
};

export default GridSection;
