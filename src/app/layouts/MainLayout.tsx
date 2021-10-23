import React, { ReactNode } from "react";

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="main-layout">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Iceberg"
        />
      </head>

      {children}
      <style jsx>{`
        .main-layout {
        }
      `}</style>
      <style jsx global>{`
        * {
          box-sizing: border-box;
        }
        h1 {
          font-size: 7rem;
          padding: 0;
          margin: 0;
        }
        html,
        body {
          font-family: "Iceberg", -apple-system, BlinkMacSystemFont, "Segoe UI",
            Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji",
            "Segoe UI Emoji", "Segoe UI Symbol";
          margin: 0;
          padding: 0;
          background-color: #7fff00;
          animation: bgColor 15s infinite linear;
          width: 100%;
          height: 100%;
        }

        @keyframes bgColor {
          12.5% {
            background-color: #7fff00;
          }
          25% {
            background-color: #00ffff;
          }
          37.5% {
            background-color: #0000ff;
          }
          50% {
            background-color: #9932cc;
          }
          62.5% {
            background-color: #ff1493;
          }
          75% {
            background-color: #ff0000;
          }
          87.5% {
            background-color: #ffa500;
          }
          100% {
            background-color: #ffff00;
          }
        }
      `}</style>
    </div>
  );
};

export default MainLayout;
