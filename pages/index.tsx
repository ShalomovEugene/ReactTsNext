import { Inter } from "@next/font/google";
import { GetStaticProps } from "next";
import { useState } from "react";
import {
  Button,
  Htag,
  Input,
  Paragraph,
  Rating,
  Tag,
  Textarea,
} from "../components/index";
import { withLayout } from "../layout/Layout";
import axios from "axios";
import { IMenuItem } from "../interfaces/menu.interface";
import { API } from "../helpers/api";

const inter = Inter({ subsets: ["latin"] });

function Home({ menu }: IHomeProps): JSX.Element {
  const [counter, setCounter] = useState<number>(0);
  const [rarting, setRating] = useState<number>(4);

  return (
    <>
      <>
        <Htag tag="h1">{counter}</Htag>
        <Button
          appearance="primary"
          arrow="right"
          onClick={() => setCounter((x) => x + 1)}
        >
          Button
        </Button>
        <Button appearance="ghost" arrow="down">
          Button
        </Button>
        <Paragraph size="s">Text</Paragraph>
        <Tag size="s">Small</Tag>
        <Tag size="m" color="red">
          m
        </Tag>
        <Tag size="s" color="green">
          Small
        </Tag>
        <Tag color="primary">primary</Tag>
        <Rating rating={rarting} isEditable={true} setRating={setRating} />
        <Input placeholder="placeholder" />
        <Textarea placeholder="Textarea" />
      </>
    </>
  );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<IHomeProps> = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<IMenuItem[]>(API.topPage.find, {
    firstCategory,
  });

  return {
    props: {
      menu,
      firstCategory,
    },
  };
};

interface IHomeProps extends Record<string, unknown> {
  menu: IMenuItem[];
  firstCategory: number;
}
