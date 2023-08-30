import tw, { css } from "twin.macro";
import isValid from "date-fns/isValid";
import ReactDatePicker, { ReactDatePickerProps } from "react-datepicker";
import addDays from "date-fns/addDays";
import "react-datepicker/dist/react-datepicker.css";

//! ----------> TYPES <----------
export type Props = ReactDatePickerProps & {
  label: string;
  onChange: (date: Date | null) => void;
  placeholder?: string;
  error?: string;
  startDate?: Date;
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
    ${tw`px-2.5 py-2 md:(pl-3 pr-2.5 py-1.5) xl:(pl-4)`};
    ${tw`w-full`};
  }

  .react-datepicker__triangle {
    ${tw`hidden`};
  }
  .react-datepicker__month-container {
    ${tw`w-[20.9375rem]`};
  }
  .react-datepicker__header {
    ${tw`bg-orange-200 text-2xl font-display items-center`};
  }
  .react-datepicker__current-month {
    ${tw`text-orange-100 pt-2 pb-1 tracking-[2px]!`};
  }
  .react-datepicker__day {
    ${tw`transition duration-200 ease-in-out hover:(bg-orange-100 text-orange-300)`};
  }
  .react-datepicker__day--selected {
    ${tw`bg-orange-200 text-orange-100 font-semi md:(font-bold)`};
  }
  .react-datepicker__month {
    ${tw`text-green-500 font-sans text-sm pt-4 pb-5`};
  }
  .react-datepicker__day-names {
    ${tw`w-full font-sans! text-sm font-medium flex! justify-between! px-7 pb-1`};
  }
  .react-datepicker__week {
    ${tw`w-full font-sans text-xs font-medium flex! justify-between px-7 py-1`};
  }
  .react-datepicker__day-name {
    ${tw`font-semi text-orange-100 md:(font-bold)`};
  }
  .react-datepicker__navigation {
    ${tw`mt-4 mx-1`};
  }
  .react-datepicker__navigation-icon--next,
  .react-datepicker__navigation-icon--previous {
    ${tw`before:(text-orange-100 border-orange-100!)`};
  }
  .react-datepicker__day--keyboard-selected {
    ${tw`bg-orange-300 text-orange-100`};
  }
  .react-datepicker__day--disabled {
    ${tw`text-green-500/50`};
  }
`;

//! ----------> COMPONENTS <----------
const Calendar = ({ label, startDate, onChange, error, placeholder, ...rest }: Props) => {
  const date = isValid(startDate) ? startDate : null;
  return (
    <label tw="w-full" css={styles}>
      <p tw="pl-2.5 md:(pl-3) xl:(pl-4)">{label}</p>
      <ReactDatePicker
        {...rest}
        selected={date}
        onChange={onChange}
        minDate={addDays(new Date(), 8)}
        dateFormat="MMM dd, yyyy"
      />
      <p tw="text-2xs font-semi md:(font-bold) text-orange-300 pl-2.5 md:(text-xs pl-3) xl:(pl-4)">
        {error}
      </p>
    </label>
  );
};

export default Calendar;
