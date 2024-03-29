import * as React from "react";
interface HomeProps {}

const Home = (props: HomeProps) => {
  return (
    <div className="join">
      <h3 className="text-block font-light">
        به گروه آموزش زبان سنندج خوش آمدید! جهت ثبت نام و رزرو فرم زیر را تکمیل
        نمائید.
      </h3>
      <div className="form-group">
        <label>نام و نام خانوادگی:</label>
        <input
          type="text"
          required
          className="input-text fa"
          placeholder="نام و نام خانوادگی خود را وارد کنید"
        />
      </div>
      <div className="form-group">
        <label>ایمیل: </label>
        <input
          type="email"
          required
          className="input-text en"
          placeholder="ایمیل خود را وارد کنید"
        />
      </div>
      <div className="left form-group">
        <label></label>
        <button className="btn">ثبت نام</button>
      </div>
    </div>
  );
};

export { Home };
