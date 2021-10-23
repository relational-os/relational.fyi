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
          width: 100%;
          height: 100%;
        }

        body {
          background: linear-gradient(
            238deg,
            #fd8800,
            #fd008f,
            #9700fd,
            #003dfd,
            #05c7e6,
            #4bd58d
          );
          background-size: 4800% 4800%;
          -webkit-animation: rainbow 30s ease infinite;
          animation: rainbow 30s ease infinite;
        }

        @-webkit-keyframes rainbow {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        @keyframes rainbow {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        }
      `}</style>
    </div>
  );
};

export default MainLayout;
