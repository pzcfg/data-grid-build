import * as React from "react";
import { GridCellKind, GridColumnIcon, isEditableGridCell, isTextEditableGridCell } from "../../data-grid/data-grid-types.js";
import faker from "faker";
import styled from "styled-components";
import AutoSizer from "react-virtualized-auto-sizer";
import isArray from "https://esm.run/lodash/isArray.js";
import { assertNever } from "../../common/support.js";
import { browserIsFirefox } from "../../common/browser-detect.js";
faker.seed(1337);

function isTruthy(x) {
  return x ? true : false;
}

export function lossyCopyData(source, target) {
  const sourceData = source.data;

  if (typeof sourceData === typeof target.data) {
    return { ...target,
      data: sourceData
    };
  } else if (target.kind === GridCellKind.Uri) {
    var _sourceData$toString;

    if (isArray(sourceData)) {
      return { ...target,
        data: sourceData[0]
      };
    }

    return { ...target,
      data: (_sourceData$toString = sourceData === null || sourceData === void 0 ? void 0 : sourceData.toString()) !== null && _sourceData$toString !== void 0 ? _sourceData$toString : ""
    };
  } else if (target.kind === GridCellKind.Boolean) {
    if (isArray(sourceData)) {
      return { ...target,
        data: sourceData[0] !== undefined
      };
    } else if (source.kind === GridCellKind.Boolean) {
      return { ...target,
        data: source.data
      };
    }

    return { ...target,
      data: isTruthy(sourceData) ? true : false
    };
  } else if (target.kind === GridCellKind.Image) {
    var _sourceData$toString2;

    if (isArray(sourceData)) {
      return { ...target,
        data: [sourceData[0]]
      };
    }

    return { ...target,
      data: [(_sourceData$toString2 = sourceData === null || sourceData === void 0 ? void 0 : sourceData.toString()) !== null && _sourceData$toString2 !== void 0 ? _sourceData$toString2 : ""]
    };
  } else if (target.kind === GridCellKind.Number) {
    return { ...target,
      data: 0
    };
  } else if (target.kind === GridCellKind.Text || target.kind === GridCellKind.Markdown) {
    var _source$data$toString, _source$data;

    if (isArray(sourceData)) {
      var _sourceData$0$toStrin;

      return { ...target,
        data: (_sourceData$0$toStrin = sourceData[0].toString()) !== null && _sourceData$0$toStrin !== void 0 ? _sourceData$0$toStrin : ""
      };
    }

    return { ...target,
      data: (_source$data$toString = (_source$data = source.data) === null || _source$data === void 0 ? void 0 : _source$data.toString()) !== null && _source$data$toString !== void 0 ? _source$data$toString : ""
    };
  } else if (target.kind === GridCellKind.Custom) {
    return target;
  }

  assertNever(target);
}
export function getGridColumn(columnWithMock) {
  const {
    getContent,
    ...rest
  } = columnWithMock;
  return rest;
}
export const BeautifulStyle = styled.div.withConfig({
  displayName: "utils__BeautifulStyle",
  componentId: "sc-1kiz1ms-0"
})(["background-color:#2790b9;background:linear-gradient(90deg,#2790b9,#2070a9);color:white;padding:32px 48px;display:flex;flex-direction:column;height:100vh;font-family:sans-serif;&.double{height:200vh;}& > h1{font-size:50px;font-weight:600;flex-shrink:0;margin:0 0 12px 0;}.sizer{flex-grow:1;background-color:white;border-radius:12px;box-shadow:rgba(9,30,66,0.25) 0px 4px 8px -2px,rgba(9,30,66,0.08) 0px 0px 0px 1px;.sizer-clip{border-radius:12px;overflow:hidden;transform:translateZ(0);height:100%;}}&.firefox .sizer{border-radius:0;box-shadow:unset;.sizer-clip{border-radius:0;}}.white{background-color:white;}"]);
export const PropName = styled.span.withConfig({
  displayName: "utils__PropName",
  componentId: "sc-1kiz1ms-1"
})(["font-family:monospace;font-weight:500;color:#ffe394;"]);
export const Description = styled.p.withConfig({
  displayName: "utils__Description",
  componentId: "sc-1kiz1ms-2"
})(["font-size:18px;flex-shrink:0;margin:0 0 20px 0;"]);
export const MoreInfo = styled.p.withConfig({
  displayName: "utils__MoreInfo",
  componentId: "sc-1kiz1ms-3"
})(["font-size:14px;flex-shrink:0;margin:0 0 20px 0;button{background-color:#f4f4f4;color:#2b2b2b;padding:2px 6px;font-family:monospace;font-size:14px;border-radius:4px;box-shadow:0px 1px 2px #00000040;margin:0 0.1em;border:none;cursor:pointer;}"]);
export const BeautifulWrapper = p => {
  const {
    title,
    children,
    description,
    className
  } = p;
  return React.createElement(BeautifulStyle, {
    className: className + (browserIsFirefox ? " firefox" : "")
  }, React.createElement("h1", null, title), description, React.createElement("div", {
    className: "sizer"
  }, React.createElement("div", {
    className: "sizer-clip"
  }, React.createElement(AutoSizer, null, props => {
    var _props$width, _props$height;

    return React.createElement("div", {
      style: {
        position: "relative",
        width: (_props$width = props.width) !== null && _props$width !== void 0 ? _props$width : 100,
        height: (_props$height = props.height) !== null && _props$height !== void 0 ? _props$height : 100
      }
    }, children);
  }))));
};

function createTextColumnInfo(index, group) {
  return {
    title: `Column ${index}`,
    id: `Column ${index}`,
    group: group ? `Group ${Math.round(index / 3)}` : undefined,
    icon: GridColumnIcon.HeaderString,
    hasMenu: false,
    getContent: () => {
      const text = faker.lorem.word();
      return {
        kind: GridCellKind.Text,
        data: text,
        displayData: text,
        allowOverlay: true,
        readonly: true
      };
    }
  };
}

function getResizableColumns(amount, group) {
  const defaultColumns = [{
    title: "First name",
    id: "First name",
    group: group ? "Name" : undefined,
    icon: GridColumnIcon.HeaderString,
    hasMenu: false,
    getContent: () => {
      const firstName = faker.name.firstName();
      return {
        kind: GridCellKind.Text,
        displayData: firstName,
        data: firstName,
        allowOverlay: true,
        readonly: true
      };
    }
  }, {
    title: "Last name",
    id: "Last name",
    group: group ? "Name" : undefined,
    icon: GridColumnIcon.HeaderString,
    hasMenu: false,
    getContent: () => {
      const lastName = faker.name.lastName();
      return {
        kind: GridCellKind.Text,
        displayData: lastName,
        data: lastName,
        allowOverlay: true,
        readonly: true
      };
    }
  }, {
    title: "Avatar",
    id: "Avatar",
    group: group ? "Info" : undefined,
    icon: GridColumnIcon.HeaderImage,
    hasMenu: false,
    getContent: () => {
      const n = Math.round(Math.random() * 100);
      return {
        kind: GridCellKind.Image,
        data: [`https://picsum.photos/id/${n}/900/900`],
        displayData: [`https://picsum.photos/id/${n}/40/40`],
        allowOverlay: true,
        allowAdd: false,
        readonly: true
      };
    }
  }, {
    title: "Email",
    id: "Email",
    group: group ? "Info" : undefined,
    icon: GridColumnIcon.HeaderString,
    hasMenu: false,
    getContent: () => {
      const email = faker.internet.email();
      return {
        kind: GridCellKind.Text,
        displayData: email,
        data: email,
        allowOverlay: true,
        readonly: true
      };
    }
  }, {
    title: "Title",
    id: "Title",
    group: group ? "Info" : undefined,
    icon: GridColumnIcon.HeaderString,
    hasMenu: false,
    getContent: () => {
      const company = faker.name.jobTitle();
      return {
        kind: GridCellKind.Text,
        displayData: company,
        data: company,
        allowOverlay: true,
        readonly: true
      };
    }
  }, {
    title: "More Info",
    id: "More Info",
    group: group ? "Info" : undefined,
    icon: GridColumnIcon.HeaderUri,
    hasMenu: false,
    getContent: () => {
      const url = faker.internet.url();
      return {
        kind: GridCellKind.Uri,
        displayData: url,
        data: url,
        allowOverlay: true,
        readonly: true
      };
    }
  }];

  if (amount < defaultColumns.length) {
    return defaultColumns.slice(0, amount);
  }

  const extraColumnsAmount = amount - defaultColumns.length;
  const extraColumns = [...new Array(extraColumnsAmount)].map((_, index) => createTextColumnInfo(index + defaultColumns.length, group));
  return [...defaultColumns, ...extraColumns];
}

export class ContentCache {
  constructor() {
    this.cachedContent = new Map();
  }

  get(col, row) {
    const colCache = this.cachedContent.get(col);

    if (colCache === undefined) {
      return undefined;
    }

    return colCache.get(row);
  }

  set(col, row, value) {
    if (this.cachedContent.get(col) === undefined) {
      this.cachedContent.set(col, new Map());
    }

    const rowCache = this.cachedContent.get(col);
    rowCache.set(row, value);
  }

}
export function useMockDataGenerator(numCols) {
  let readonly = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  let group = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  const cache = React.useRef(new ContentCache());
  const [colsMap, setColsMap] = React.useState(() => getResizableColumns(numCols, group));
  React.useEffect(() => {
    setColsMap(getResizableColumns(numCols, group));
  }, [group, numCols]);
  const onColumnResize = React.useCallback((column, newSize) => {
    setColsMap(prevColsMap => {
      const index = prevColsMap.findIndex(ci => ci.title === column.title);
      const newArray = [...prevColsMap];
      newArray.splice(index, 1, { ...prevColsMap[index],
        width: newSize
      });
      return newArray;
    });
  }, []);
  const cols = React.useMemo(() => {
    return colsMap.map(getGridColumn);
  }, [colsMap]);
  const getCellContent = React.useCallback(_ref => {
    let [col, row] = _ref;
    let val = cache.current.get(col, row);

    if (val === undefined) {
      val = colsMap[col].getContent();

      if (!readonly) {
        if (isTextEditableGridCell(val)) {
          val = { ...val,
            readonly
          };
        }
      }

      cache.current.set(col, row, val);
    }

    return val;
  }, [colsMap, readonly]);
  const getCellsForSelection = React.useCallback(selection => {
    const result = [];

    for (let y = selection.y; y < selection.y + selection.height; y++) {
      const row = [];

      for (let x = selection.x; x < selection.x + selection.width; x++) {
        row.push(getCellContent([x, y]));
      }

      result.push(row);
    }

    return result;
  }, [getCellContent]);
  const setCellValueRaw = React.useCallback((_ref2, val) => {
    let [col, row] = _ref2;
    cache.current.set(col, row, val);
  }, []);
  const setCellValue = React.useCallback((_ref3, val) => {
    let [col, row] = _ref3;
    let current = cache.current.get(col, row);

    if (current === undefined) {
      current = colsMap[col].getContent();
    }

    if (isEditableGridCell(val) && isEditableGridCell(current)) {
      const copied = lossyCopyData(val, current);
      cache.current.set(col, row, { ...copied,
        displayData: typeof copied.data === "string" ? copied.data : copied.displayData,
        lastUpdated: performance.now()
      });
    }
  }, [colsMap]);
  return {
    cols,
    getCellContent,
    onColumnResize,
    setCellValue,
    getCellsForSelection,
    setCellValueRaw
  };
}