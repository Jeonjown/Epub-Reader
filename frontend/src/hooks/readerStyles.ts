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
  },

  readerArea: {
    ...ReactReaderStyle.readerArea,
    // backgroundColor: "#FAF9F6",
    border: "1px solid ",
    borderColor: "#e5e7eb",
    borderRadius: "3px",
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
