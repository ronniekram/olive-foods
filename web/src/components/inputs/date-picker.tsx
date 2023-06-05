import tw, { css } from "twin.macro";
import { FiCalendar } from "react-icons/fi";
import ReactDatePicker, { ReactDatePickerProps } from "react-datepicker";
import addDays from "date-fns/addDays";
import "react-datepicker/dist/react-datepicker.css";

//! ----------> TYPES <----------
export type Props = ReactDatePickerProps & {
  label: string;
  onChange: (date: Date | null) => void;
  placeholder?: string;
  error?: string;
  startDate?: Date | null;
};

//! ----------> STYLES <----------
const styles = css`
  ${tw`font-sans text-sm text-green-500 font-medium md:(text-base) xl:(text-lg)`};

  .react-datepicker {
    ${tw`border border-grey font-sans antialiased`};
    ${tw`bg-green-100`};
    box-shadow: 0px 4px 8px 0px rgba(31, 67, 40, 0.25);
  }

  input {
    ${tw`border border-grey rounded`};
    ${tw`bg-green-100 font-sans xl:(text-lg)`};
    ${tw`px-2.5 py-1.5 md:(pl-3 pr-2.5 py-2) xl:(pl-4 py-2.5)`};
    ${tw`w-full`};
  }

  .react-datepicker__triangle { ${tw`hidden`}; }
  .react-datepicker__month-container { ${tw`w-[20.9375rem]`}; }
  .react-datepicker__header { ${tw`bg-orange-100 text-2xl tracking-[2px]! font-display items-center`}; }
  .react-datepicker__current-month { ${tw`text-orange-200 pt-1`}; }
  .react-datepicker__day { ${tw`transition duration-200 ease-in-out hover:(bg-orange-100 text-orange-300)`}; }
  .react-datepicker__day--selected { ${tw`bg-orange-200 text-orange-100 font-bold`}; }
  .react-datepicker__month { ${tw`text-green-500 font-sans text-sm py-2.5`}; }
  .react-datepicker__day-names { ${tw`w-full font-sans! text-sm font-medium text-green-500! flex! justify-between! px-7 pb-1`}; }
  .react-datepicker__week { ${tw`w-full font-sans text-xs font-medium text-green-500! flex! justify-between px-7 py-1`}; }
  .react-datepicker__day-name { ${tw`font-bold`}; }
  .react-datepicker__navigation-icon { ${tw`text-orange-200 text-2xl font-display before:(text-orange-200 text-2xl font-display)`}; }
`;

//! ----------> COMPONENTS <----------
const Calendar = ({ label, startDate, onChange, error, placeholder, ...rest }: Props) => {
  return (
    <label tw="w-full" css={styles}>
      <p tw="pl-2.5 md:(pl-3) xl:(pl-4)">{label}</p>
      <ReactDatePicker
        {...rest}
        selected={startDate}
        onChange={onChange}
        minDate={addDays(new Date(), 3)}
        placeholderText={placeholder}
        dateFormat="MM-DD-YYYY"
      />
      <p tw="text-2xs font-bold text-orange-300 pl-2.5 md:(text-xs pl-3) xl:(pl-4)">{error}</p>
    </label>
  );
};

export default Calendar;
