import styles from "./styles.module.css";

const Legal = () => {
  return (
    <div>
      <h1>Legal</h1>
      <h2>Privacy Policy for Yolkify</h2>
      <p>
        This privacy policy governs the use of the Yolkify app and any
        associated services (the "App"), created by Ellis O'Dowd.{"\n"}
        By using the App, you agree to the collection, use, and disclosure of
        your information as described in this policy.{"\n"}
        <h3>Information We Collect</h3>
        {"\n"}
        The App collects the following information:
        {"\n"}- Email and password: This information is collected when you sign
        up for the App and is used to authenticate your account.{"\n"}-
        Username: This information is collected when you create an account and
        is used for your profile and social interactions within the App.
        {"\n"}- Given name: This information is collected when you sign up for
        the App and is used to personalize your experience.{"\n"}- Workout
        dates, workout durations, workout exercises, exercise sets, and weights:
        This information is collected when you enter it into the App and is used
        to track your workouts and provide you with visual data to help you
        improve your performance. {"\n"}- Anonymous exercise data: This
        information may be sold to companies for research purposes. This data
        will not include any identifying information such as name or email
        address.{"\n"}- Social interactions: The App allows you to share your
        workouts, PRs, captions, and engage in likes and comments on posts.
        These interactions will be visible to other users.{"\n"}
        <h3>Use of Information</h3>
        {"\n"}
        The information we collect is used to:
        {"\n"}- Track your workouts and provide you with visual data to help you
        improve your performance.{"\n"}- Personalize your experience.
        {"\n"}- Sell anonymous exercise data to companies for research purposes.
        {"\n"}- Tailor advertements to your interests.
        {"\n"}- Enable social interactions among users, including sharing
        workouts and engaging in likes and comments.{"\n"}
        <h3>Sharing of Information</h3>
        {"\n"}
        We do not share your name, email address, or password with any third
        parties. However, we may share anonymous exercise data with companies
        for research purposes. Social interactions within the App, such as
        sharing workouts and engaging in likes and comments, will be visible to
        other users.{"\n"}
        <h3>Age Restrictions</h3>
        {"\n"}
        The App is intended for use by individuals aged 14 and older. We do not
        knowingly collect personal information from children under the age of
        14. If we become aware that we have collected personal information from
        a child under the age of 14, we will take steps to delete such
        information from our servers. {"\n"}
        <h3>Changes to this Privacy Policy</h3>
        {"\n"}
        We reserve the right to make changes to this privacy policy at any time.
        We will notify you of any changes by posting the updated policy on the
        App. Your continued use of the App after any changes to this policy will
        constitute your acceptance of such changes.{"\n"}
        <h3>Data Security</h3>
        {"\n"}
        We take the security of your personal information seriously and have
        implemented reasonable administrative, technical, and physical measures
        to protect your information from unauthorized access, use, or
        disclosure. The data collected by our workout tracker app is stored in a
        MongoDB Atlas cluster, which is a cloud-based database service provided
        by MongoDB, Inc. MongoDB Atlas is designed to provide secure, reliable
        access to your data, with features such as encryption, network
        isolation, and regular backups. We also require all employees and
        contractors with access to user data to sign confidentiality agreements
        and undergo background checks. However, no method of transmission over
        the Internet or method of electronic storage is 100% secure, and we
        cannot guarantee absolute security of your personal information. If we
        become aware of a security breach that affects your personal
        information, we will take appropriate measures to notify you in
        accordance with applicable law.
        <h3>Contact Us</h3>
        {"\n"}
        If you have any questions or concerns about this privacy policy, please
        contact us at yolkifyapp@gmail.com
      </p>
    </div>
  );
};

export default Legal;
