import Constantes from "../../shared/utils/Constantes";
import moment from "moment";

class Data {
  static data = {
    id: 0,
    title: "The best framework for Backend web app",
    description:
      "Select the best framework to develop the backend of a modern web application",
    expirationDate: moment().add(25, "seconds").format("MM-DD-YYYY H:mm:ss"),
    countVotes: 10,
    createdAt: new Date(),
    coverImage: Constantes.webFrameworks,
    options: [
      {
        title: "NestJS - Node",
        coverImage: "https://docs.nestjs.com/assets/logo-small.svg",
        selected: true,
      },
      {
        title: "Buffalo - Go Lang",
        coverImage:
          "https://www.clipartmax.com/png/small/414-4145925_reflecting-on-the-first-year-of-buffalo-buffalo-rapid-golang-buffalo.png",
        selected: false,
      },
      {
        title: "SpringBoot - Java",
        coverImage:
          "https://gitlab.com/uploads/-/system/project/avatar/10814146/1_O68LbDvD5Dcsnez73M7v4Q.png",
        selected: false,
      },
      {
        title: "Phoenix - Elixir",
        coverImage: Constantes.phoenixElixirIcon,
        selected: false,
      },
    ],
  };

  static poll1 = {
    id: 1,
    title: "The best framework for Frontend web app",
    description:
      "Select the best framework to develop the frontend of a modern web application",
    expirationDate: moment().add(25, "seconds").format("MM-DD-YYYY H:mm:ss"),
    timeTillDate: "2020-04-01",
    countVotes: 10,
    createdAt: new Date(),
    coverImage: "https://miro.medium.com/max/1024/1*HXeCi2I6WcNY1WshQFaBuA.png",
    options: [
      {
        title: "ReactJS - JavaScript",
        coverImage:
          "https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/026/full/react.png",
        selected: true,
        percentage: 44,
      },
    ],
  };

  static poll2 = {
    id: 2,
    title: "Did you like the latest version of JavaEE",
    description:
      "Select the best option that fits your level of satisfaction with the new version of JavaEE",
    expirationDate: moment().add(25, "seconds").format("MM-DD-YYYY H:mm:ss"),
    timeTillDate: "2020-01-25",
    countVotes: 10,
    createdAt: new Date(),
    coverImage: "https://avatars3.githubusercontent.com/u/23086798?s=280&v=4",
    options: [
      {
        title: "More of the same",
        coverImage:
          "https://1.bp.blogspot.com/-qF2fRfZ1pVI/WmypDcPYvpI/AAAAAAAAFBY/fdiTn1oH84I3xqP3R3JI_fpAgXwW0vmmQCLcBGAs/s1600/emoji.png",
        selected: true,
        percentage: 35,
      },
      {
        title: "Good",
        coverImage:
          "https://cdn3.iconfinder.com/data/icons/emotion-30/32/smile-512.png",
        selected: false,
        percentage: 25,
      },
      {
        title: "Very Good",
        coverImage:
          "data:image/jpeg;base64,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",
        selected: false,
        percentage: 10,
      },
      {
        title: "Bad",
        coverImage:
          "data:image/jpeg;base64,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",
        selected: false,
        percentage: 30,
      },
    ],
  };

  static poll3 = {
    id: 3,
    title: "The best framework for Mobile  app",
    description:
      "Select the best framework to develop the backend of a modern mobile application",
    expirationDate: moment().add(25, "seconds").format("MM-DD-YYYY H:mm:ss"),
    timeTillDate: "2019-12-10",
    countVotes: 10,
    createdAt: new Date(),
    coverImage: Constantes.mobileFrameworks,
    options: [
      {
        title: "Flutter - Dart",
        coverImage:
          "https://i1.wp.com/sovitpoudel.com.np/wp-content/uploads/2019/01/flutter.png",
        selected: true,
        percentage: 65,
      },
    ],
  };

  static mapPoll = [
    this.data, this.poll1, this.poll2, this.poll3
  ]
}

export default Data;
