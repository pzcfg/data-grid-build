"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PropName = exports.MoreInfo = exports.Description = exports.ContentCache = exports.BeautifulWrapper = exports.BeautifulStyle = void 0;
exports.getGridColumn = getGridColumn;
exports.lossyCopyData = lossyCopyData;
exports.useMockDataGenerator = useMockDataGenerator;

var React = _interopRequireWildcard(require("react"));

var _dataGridTypes = require("../../data-grid/data-grid-types");

var _faker = _interopRequireDefault(require("https://esm.run/faker"));

var _styledComponents = _interopRequireDefault(require("https://esm.run/styled-components"));

var _reactVirtualizedAutoSizer = _interopRequireDefault(require("https://esm.run/react-virtualized-auto-sizer"));

var _isArray = _interopRequireDefault(require("https://esm.run/lodash/isArray"));

var _support = require("../../common/support");

var _browserDetect = require("../../common/browser-detect");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

_faker.default.seed(1337);

function isTruthy(x) {
  return x ? true : false;
}

function lossyCopyData(source, target) {
  const sourceData = source.data;

  if (typeof sourceData === typeof target.data) {
    return { ...target,
      data: sourceData
    };
  } else if (target.kind === _dataGridTypes.GridCellKind.Uri) {
    var _sourceData$toString;

    if ((0, _isArray.default)(sourceData)) {
      return { ...target,
        data: sourceData[0]
      };
    }

    return { ...target,
      data: (_sourceData$toString = sourceData === null || sourceData === void 0 ? void 0 : sourceData.toString()) !== null && _sourceData$toString !== void 0 ? _sourceData$toString : ""
    };
  } else if (target.kind === _dataGridTypes.GridCellKind.Boolean) {
    if ((0, _isArray.default)(sourceData)) {
      return { ...target,
        data: sourceData[0] !== undefined
      };
    } else if (source.kind === _dataGridTypes.GridCellKind.Boolean) {
      return { ...target,
        data: source.data
      };
    }

    return { ...target,
      data: isTruthy(sourceData) ? true : false
    };
  } else if (target.kind === _dataGridTypes.GridCellKind.Image) {
    var _sourceData$toString2;

    if ((0, _isArray.default)(sourceData)) {
      return { ...target,
        data: [sourceData[0]]
      };
    }

    return { ...target,
      data: [(_sourceData$toString2 = sourceData === null || sourceData === void 0 ? void 0 : sourceData.toString()) !== null && _sourceData$toString2 !== void 0 ? _sourceData$toString2 : ""]
    };
  } else if (target.kind === _dataGridTypes.GridCellKind.Number) {
    return { ...target,
      data: 0
    };
  } else if (target.kind === _dataGridTypes.GridCellKind.Text || target.kind === _dataGridTypes.GridCellKind.Markdown) {
    var _source$data$toString, _source$data;

    if ((0, _isArray.default)(sourceData)) {
      var _sourceData$0$toStrin;

      return { ...target,
        data: (_sourceData$0$toStrin = sourceData[0].toString()) !== null && _sourceData$0$toStrin !== void 0 ? _sourceData$0$toStrin : ""
      };
    }

    return { ...target,
      data: (_source$data$toString = (_source$data = source.data) === null || _source$data === void 0 ? void 0 : _source$data.toString()) !== null && _source$data$toString !== void 0 ? _source$data$toString : ""
    };
  } else if (target.kind === _dataGridTypes.GridCellKind.Custom) {
    return target;
  }

  (0, _support.assertNever)(target);
}

function getGridColumn(columnWithMock) {
  const {
    getContent,
    ...rest
  } = columnWithMock;
  return rest;
}

const BeautifulStyle = _styledComponents.default.div.withConfig({
  displayName: "utils__BeautifulStyle",
  componentId: "sc-1kiz1ms-0"
})(["background-color:#2790b9;background:linear-gradient(90deg,#2790b9,#2070a9);color:white;padding:32px 48px;display:flex;flex-direction:column;height:100vh;font-family:sans-serif;&.double{height:200vh;}& > h1{font-size:50px;font-weight:600;flex-shrink:0;margin:0 0 12px 0;}.sizer{flex-grow:1;background-color:white;border-radius:12px;box-shadow:rgba(9,30,66,0.25) 0px 4px 8px -2px,rgba(9,30,66,0.08) 0px 0px 0px 1px;.sizer-clip{border-radius:12px;overflow:hidden;transform:translateZ(0);height:100%;}}&.firefox .sizer{border-radius:0;box-shadow:unset;.sizer-clip{border-radius:0;}}.white{background-color:white;}"]);

exports.BeautifulStyle = BeautifulStyle;

const PropName = _styledComponents.default.span.withConfig({
  displayName: "utils__PropName",
  componentId: "sc-1kiz1ms-1"
})(["font-family:monospace;font-weight:500;color:#ffe394;"]);

exports.PropName = PropName;

const Description = _styledComponents.default.p.withConfig({
  displayName: "utils__Description",
  componentId: "sc-1kiz1ms-2"
})(["font-size:18px;flex-shrink:0;margin:0 0 20px 0;"]);

exports.Description = Description;

const MoreInfo = _styledComponents.default.p.withConfig({
  displayName: "utils__MoreInfo",
  componentId: "sc-1kiz1ms-3"
})(["font-size:14px;flex-shrink:0;margin:0 0 20px 0;button{background-color:#f4f4f4;color:#2b2b2b;padding:2px 6px;font-family:monospace;font-size:14px;border-radius:4px;box-shadow:0px 1px 2px #00000040;margin:0 0.1em;border:none;cursor:pointer;}"]);

exports.MoreInfo = MoreInfo;

const BeautifulWrapper = p => {
  const {
    title,
    children,
    description,
    className
  } = p;
  return React.createElement(BeautifulStyle, {
    className: className + (_browserDetect.browserIsFirefox ? " firefox" : "")
  }, React.createElement("h1", null, title), description, React.createElement("div", {
    className: "sizer"
  }, React.createElement("div", {
    className: "sizer-clip"
  }, React.createElement(_reactVirtualizedAutoSizer.default, null, props => {
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

exports.BeautifulWrapper = BeautifulWrapper;

function createTextColumnInfo(index, group) {
  return {
    title: `Column ${index}`,
    id: `Column ${index}`,
    group: group ? `Group ${Math.round(index / 3)}` : undefined,
    icon: _dataGridTypes.GridColumnIcon.HeaderString,
    hasMenu: false,
    getContent: () => {
      const text = _faker.default.lorem.word();

      return {
        kind: _dataGridTypes.GridCellKind.Text,
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
    icon: _dataGridTypes.GridColumnIcon.HeaderString,
    hasMenu: false,
    getContent: () => {
      const firstName = _faker.default.name.firstName();

      return {
        kind: _dataGridTypes.GridCellKind.Text,
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
    icon: _dataGridTypes.GridColumnIcon.HeaderString,
    hasMenu: false,
    getContent: () => {
      const lastName = _faker.default.name.lastName();

      return {
        kind: _dataGridTypes.GridCellKind.Text,
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
    icon: _dataGridTypes.GridColumnIcon.HeaderImage,
    hasMenu: false,
    getContent: () => {
      const n = Math.round(Math.random() * 100);
      return {
        kind: _dataGridTypes.GridCellKind.Image,
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
    icon: _dataGridTypes.GridColumnIcon.HeaderString,
    hasMenu: false,
    getContent: () => {
      const email = _faker.default.internet.email();

      return {
        kind: _dataGridTypes.GridCellKind.Text,
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
    icon: _dataGridTypes.GridColumnIcon.HeaderString,
    hasMenu: false,
    getContent: () => {
      const company = _faker.default.name.jobTitle();

      return {
        kind: _dataGridTypes.GridCellKind.Text,
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
    icon: _dataGridTypes.GridColumnIcon.HeaderUri,
    hasMenu: false,
    getContent: () => {
      const url = _faker.default.internet.url();

      return {
        kind: _dataGridTypes.GridCellKind.Uri,
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

class ContentCache {
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

exports.ContentCache = ContentCache;

function useMockDataGenerator(numCols) {
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
        if ((0, _dataGridTypes.isTextEditableGridCell)(val)) {
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

    if ((0, _dataGridTypes.isEditableGridCell)(val) && (0, _dataGridTypes.isEditableGridCell)(current)) {
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