import * as React from "react";
interface LayoutProps {
  children: React.ReactChild;
}

const Layout = (props: LayoutProps) => {
  return (
    <>
      <header className="header">
        <div className="top container col-12">
          <div className="logo">
            <img height="40" src="./logo.png" />
          </div>
          <nav className="menu">
            <ul>
              <li>
                <a href="#">صفحه اصلی</a>
              </li>
              <li>
                <a href="#">جلسات قبلی</a>
              </li>
              <li>
                <a href="#">درباره ما</a>
              </li>
              <li>
                <a href="#">تماس با ما</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="container">{props.children}</div>
      </header>
    </>
  );
};

export { Layout };
