import { ReactReaderStyle, type IReactReaderStyle } from "react-reader";

export const myReaderStyles: IReactReaderStyle = {
  ...ReactReaderStyle,

  // arrow: {
  //   ...ReactReaderStyle.arrow,
  //   color: "#2c3e50",
  //   backgroundColor: "",
  // },
  // arrowHover: {
  //   ...ReactReaderStyle.arrowHover,
  //   color: "#1abc9c",
  // },

  container: {
    ...ReactReaderStyle.container,
    // backgroundColor: "#704214",
    // padding: "1.5rem",
    // borderRadius: "8px",
  },
  containerExpanded: {
    ...ReactReaderStyle.containerExpanded,
  },
  loadingView: {
    ...ReactReaderStyle.loadingView,
  },

  next: {
    ...ReactReaderStyle.next,
  },

  prev: {
    ...ReactReaderStyle.prev,
  },

  reader: {
    ...ReactReaderStyle.reader,
    backgroundColor: "#FAF9F6",
    // border: "1px solid black",
    borderRadius: "2px",
    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
    padding: "2em",
  },

  readerArea: {
    ...ReactReaderStyle.readerArea,

    // backgroundColor: "#0000FF",
  },

  titleArea: {
    ...ReactReaderStyle.titleArea,
    // backgroundColor: "#0000FF",
  },

  tocArea: {
    ...ReactReaderStyle.tocArea,
    // backgroundColor: "#0000FF",
  },
};
