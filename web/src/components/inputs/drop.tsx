import Select, { StylesConfig } from "react-select";
import tw, { styled } from "twin.macro";

//! ----------> TYPES <----------
type OptionValue = string | number | unknown;

export type Props<Option = unknown> = {
  label: string;
  options: Option[];
  placeholder: string;
  value?: Option;
  defaultValue?: OptionValue;
  onChange?: (e?: any) => void;
  error?: string;
};

export type Option<T = OptionValue> = {
  label: string;
  value: T;
};

//! ----------> STYLES <----------
const dropStyle: StylesConfig = {
  dropdownIndicator: (styles) => ({
    ...styles,
    color: `#1F4328`,
    paddingTop: `4px`,
    paddingBottom: `4px`,
  }),
  indicatorSeparator: (styles) => ({ ...styles, display: `none` }),
  clearIndicator: (styles) => ({ ...styles, color: `#1F4328` }),
  option: (styles, state) => ({
    ...styles,
    color: state.isSelected ? `#FDF0ED` : `#132A19`,
    background: state.isSelected ? `#E95C32` : `#FBF5EB`,
    fontFamily: `Micro Grotesk`,
    fontWeight: 400,
    fontSize: `14px`,
    lineHeight: `22.4px`,
    padding: `10px 20px`,
  }),
  placeholder: (styles) => ({
    ...styles,
    color: `#32312F`,
    fontFamily: `Micro Grotesk`,
    fontSize: `14px`,
    lineHeight: `22.4px`,
    fontWeight: 400,
    letterSpacing: `4%`,
  }),
  control: (styles, state) => ({
    ...styles,
    backgroundColor: `transparent`,
    width: `100%`,
    border: state.isFocused ? `1.5px solid #819E3B` : `1px solid #32312F`,
    borderRadius: `4px`,
    color: `#68708A`,
    boxSizing: `border-box`,
  }),
  menu: (styles) => ({
    ...styles,
    backgroundColor: `#FBF5EB`,
    border: `1px solid #32312F`,
    borderRadius: `4px`,
    overflowX: `hidden`,
    position: `absolute`,
    zIndex: 30,
  }),
  singleValue: (styles) => ({
    ...styles,
    color: `#1F4328`,
  }),
  valueContainer: (styles) => ({
    ...styles,
    padding: `0px`,
  }),
  container: (styles) => ({
    ...styles,
    boxSizing: `border-box`,
  }),
};

const Wrapper = styled.div`
  .select {
    ${tw`w-full drop-shadow-sm`};
    ${tw`focus:(outline-2 outline-green-400)`};
  }

  .select__option {
    ${tw`transition duration-200 ease-in-out`};
    &:hover {
      ${tw`bg-orange-100 text-orange-300`};
    }
  }

  .select__control {
    ${tw`text-sm pl-2.5 py-0`};
    ${tw`sm:(pl-3 py-0.5) md:(text-base) lg:(py-[3px])`};
    ${tw`xl:(text-lg pl-4)`};
  }

  .select__placeholder {
    ${tw`text-sm py-0`};
    ${tw`sm:(py-0.5) md:(text-base) lg:(py-[3px])`};
    ${tw`xl:(text-lg)`};
  }

  .select__input-container {
    ${tw`my-0 py-0`};
  }
`;

//! ----------> COMPONENTS <----------
const SelectMenu = ({
  label,
  options,
  placeholder,
  value,
  defaultValue,
  onChange,
  error,
}: Props) => {
  return (
    <label>
      <p tw="text-green-500 text-sm font-medium pl-2.5 md:(text-base pl-3) xl:(text-lg pl-4)">
        {label}
      </p>
      <Wrapper>
        <Select
          styles={dropStyle}
          options={options}
          placeholder={placeholder}
          value={value}
          defaultValue={defaultValue}
          onChange={onChange}
          classNamePrefix="select"
          isSearchable
        />
      </Wrapper>
      <p tw="text-2xs font-bold text-orange-300 pl-2.5 md:(text-xs pl-3) xl:(pl-4)">{error}</p>
    </label>
  );
};

export default SelectMenu;
