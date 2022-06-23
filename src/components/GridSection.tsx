import cx from "classnames";
import * as React from "react";
import { Image } from "../types/kg";
import Card from "./Card";
import Grid from "./Grid";
import Img from "./Img";
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
  if (!items?.length || items.length === 0) return null;
  return (
    <div className={cx(className)}>
      <Section title={title}>
        <Grid>
          {items?.map((item) => (
            <Card key={item.id} href={item.slug}>
              <div className="flex gap-2">
                {item.image && (
                  <div className="flex-none">
                    <Img width={40} image={item.image} />
                  </div>
                )}
                <div>
                  <div className="font-medium">{item.name}</div>
                  {item.subtitle && item.subtitle.length > 0 && (
                    <div className="text-gray-700 text-sm">{item.subtitle}</div>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </Grid>
      </Section>
    </div>
  );
};

export default GridSection;
