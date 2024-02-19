import React, { useState } from "react";
import styles from "./styles.css";
import axios from "axios";

import graphs from "../../assets/screenshots/graphs.png";
import previous from "../../assets/screenshots/previous.png";
import social from "../../assets/screenshots/social.png";
import active from "../../assets/screenshots/active.png";
// import styles from "./footer.module.css";
import Link from "next/link";
import Image from "next/image";
const SecondSection = () => {
  const [count, setCount] = useState([0]);
  const postData = async () => {
    try {
      const response = await axios.post(
        "https://us-west-2.aws.data.mongodb-api.com/app/yolkify-mkxti/endpoint/users/count",
        {
          // other data to be sent in the request
        }
      );
      console.log("res");
      console.log(response.data);
      setCount(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  postData();
  return (
    <div className="screen-height">
      <div className="pg2-header-holder">
        <h2>
          Why are <text className="current-count">{count}</text> people using
          Yolkify?
        </h2>
      </div>
      <div className="content-container">
        <div className="card">
          <div className="image-container">
            <Image
              src={active}
              alt="App Screenshot"
              unoptimized="true"
              className="screenshot"
            />
          </div>
          <div className="card-text-holder">
            <h3 className="main-point">
              Comprehensive Workout <text className="gold">Tracking 📓</text>
            </h3>{" "}
            <p className="description">
              Yolkify offers a robust platform for weightlifters to meticulously
              track their workout sessions.
              <br />
              <br />
              {"\n"} Users can log every set, record weights lifted, and
              document exercise details. <br />
              <br /> This comprehensive tracking system allows individuals to
              analyze their progress over time, identify strengths and
              weaknesses, and make informed adjustments.
            </p>
          </div>
        </div>
        <div className="card">
          <div className="image-container">
            {" "}
            <Image
              src={graphs}
              alt="App Screenshot"
              unoptimized="true"
              className="screenshot"
            />
          </div>
          <div className="card-text-holder">
            <h3 className="main-point">
              Visualize Your <text className="gold">Progress📈</text>
            </h3>
            <p className="description">
              Yolkify provides users with visually engaging graphs and charts
              that showcase their fitness journey. <br />
              <br /> These dynamic visual representations make it easy for
              individuals to assess trends, celebrate milestones, and stay
              motivated by witnessing their hard work translate into tangible
              progress. <br />
              <br /> Whether you're aiming for strength gains, weight loss, or
              muscle growth, Yolkify's visual tools keep you on the path to
              success.
            </p>
          </div>
        </div>
        {/* <div className="card">
          <div className="image-container">
            {" "}
            <Image
              src={graphs}
              alt="App Screenshot"
              unoptimized="true"
              className="screenshot"
            />
          </div>
          <div className="card-text-holder">
            <h3 className="main-point">
              <text className="gold">Free</text>, No Strings Attached🆓
            </h3>
            <p className="description">
              Yolkify is committed to making fitness tracking and progress
              visualization accessible to everyone, which is why the app is
              completely free to use. There are no hidden costs, subscription
              fees, or premium version.
            </p>
          </div>
        </div> */}
        <div className="card">
          <div className="image-container">
            {" "}
            <Image
              src={social}
              alt="App Screenshot"
              unoptimized="true"
              className="screenshot"
            />
          </div>
          <div className="card-text-holder">
            <h3 className="main-point">
              <text className="gold">Social</text> Connectivity and Support👥
            </h3>
            <p className="description">
              Yolkify fosters a sense of community by allowing users to share
              their workouts, personal records, and progress pictures with
              friends.
              <br />
              <br /> Stay connected and motivated by cheering on your friends'
              achievements or receiving encouragement for your own.
              <br />
              <br /> The social aspect of Yolkify transforms the app into a
              supportive network where users can inspire and be inspired,
              enhancing the overall fitness experience.
            </p>
          </div>
        </div>
        {/* <div className="card">
          <div className="image-container">
            {" "}
            <Image
              src={previous}
              alt="App Screenshot"
              unoptimized="true"
              className="screenshot"
            />
          </div>
          <div className="card-text-holder">
            <h3 className="main-point">
              Complete Exercise <text className="gold">History🕙 </text>
            </h3>
            <p className="description">
              Yolkify lets you delve into the specifics of your training by
              enabling users to revisit every set of an exercise they've ever
              done.
            </p>
          </div>
        </div> */}

        {/* Add more main ideas and descriptions as needed */}
      </div>
    </div>
  );
};
export default SecondSection;
