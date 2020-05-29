import Constantes from "../../shared/utils/Constantes";
import moment from "moment";

class Data {

    static data = {
        title: "The best framework for Backend web app",
        description:
          "Select the best framework to develop the backend of a modern web application",
        expirationDate: moment().add(25, 'seconds').format("MM-DD-YYYY H:mm:ss"),
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
        title: "The best framework for Frontend web app",
        description:
            "Select the best framework to develop the frontend of a modern web application",
        expirationDate: moment().add(25, 'seconds').format("MM-DD-YYYY H:mm:ss"),
        timeTillDate: "2020-04-01",
        countVotes: 10,
        createdAt: new Date(),
        coverImage: "https://miro.medium.com/max/1024/1*HXeCi2I6WcNY1WshQFaBuA.png",
        options: [
            {
                title: "ReactJS - JavaScript",
                coverImage: "https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/026/full/react.png",
                selected: true,
                percentage: 44
            }
        ],
    };

    static poll2 = {
        title: "Did you like the latest version of JavaEE",
        description:
            "Select the best option that fits your level of satisfaction with the new version of JavaEE",
        expirationDate: moment().add(25, 'seconds').format("MM-DD-YYYY H:mm:ss"),
        timeTillDate: "2020-01-25",
        countVotes: 10,
        createdAt: new Date(),
        coverImage: "https://avatars3.githubusercontent.com/u/23086798?s=280&v=4",
        options: [
            {
                title: "More of the same",
                coverImage: "https://1.bp.blogspot.com/-qF2fRfZ1pVI/WmypDcPYvpI/AAAAAAAAFBY/fdiTn1oH84I3xqP3R3JI_fpAgXwW0vmmQCLcBGAs/s1600/emoji.png",
                selected: true,
                percentage: 35
            }
        ],
    };

    static poll3 = {
        title: "The best framework for Mobile  app",
        description:
            "Select the best framework to develop the backend of a modern mobile application",
        expirationDate: moment().add(25, 'seconds').format("MM-DD-YYYY H:mm:ss"),
        timeTillDate: "2019-12-10",
        countVotes: 10,
        createdAt: new Date(),
        coverImage: Constantes.mobileFrameworks,
        options: [
            {
                title: "Flutter - Dart",
                coverImage: "https://i1.wp.com/sovitpoudel.com.np/wp-content/uploads/2019/01/flutter.png",
                selected: true,
                percentage: 65
            }
        ],
    };
}

export default Data;