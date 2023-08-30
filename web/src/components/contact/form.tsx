/* eslint-disable unicorn/better-regex */
import { useState } from "react";
import tw, { styled } from "twin.macro";
import axios from "axios";
import isAfter from "date-fns/isAfter";
import addDays from "date-fns/addDays";
import format from "date-fns/format";
import { useForm, Controller, SubmitHandler } from "react-hook-form";

import Input, { TextArea } from "../inputs/text";
import SelectMenu, { Option } from "../inputs/drop";
import Calendar from "../inputs/date-picker";
import Breaker from "../general/breaker";
import { Button } from "../general/button";
import LoadingDots from "../general/loading";

//! ----------> TYPES <----------
export type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  eventType: Option;
  eventDate: string;
  detail: string;
};

//! ----------> STYLES <----------
const Wrapper = styled.section`
  ${tw`w-full`};
  ${tw`flex flex-col`};
  ${tw`space-y-8 sm:(space-y-8) md:(space-y-12)`};
  ${tw`lg:(space-y-8) xl:(space-y-12) 2xl:(space-y-14)`};
  ${tw`text-grey font-sans`};
  ${tw`text-sm sm:(text-base) md:(text-lg) lg:(text-base) xl:(text-lg) 2xl:(text-xl)`};
  ${tw`bg-green-100 border-[1.5px] border-orange-300`};
  ${tw`rounded-lg`};
  ${tw`px-5 pt-12 pb-14 sm:(px-8 pt-14 pb-20)`};
  ${tw`md:(px-12 pt-14 pb-20) lg:(px-8 pt-16 pb-20)`};
  ${tw`xl:(px-10 pt-20 pb-24) 2xl:(px-14)`};
  box-shadow: 0px 4px 8px 0px rgba(31, 67, 40, 0.25);
`;

const eventOptions: Option[] = [
  { label: `Event - Lunch`, value: `lunch` },
  { label: `Event - Family Style`, value: `family` },
  { label: `Event - Grazing Table`, value: `grazing` },
  { label: `Meal Prep Coaching`, value: `meal-prep` },
  { label: `Dinner Party`, value: `dinner-party` },
  { label: `Dinner for Two`, value: `intimate-dinner` },
  { label: `Charcuterie - Individual Portions`, value: `boxed` },
  { label: `Charcuterie - Boards`, value: `boards` },
];

//! ----------> HELPERS <----------
const validateDate = (value: Date) => {
  const minDate = addDays(new Date(), 7);

  if (isAfter(minDate, value)) return true;
  return `Event date should be after ${format(minDate, `MMM d, Y`)}`;
};

const validateEmail = (value: string) => {
  const isValid =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      value
    );

  return isValid ? true : `Invalid email address`;
};

//! ----------> COMPONENTS <----------
const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSuccessful, setIsSuccessful] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    mode: `onBlur`,
  });

  const onSubmit: SubmitHandler<FormValues> = async (data: FormValues) => {
    setIsSubmitting(true);

    try {
      const resp = await axios.post(`/api/event-request`, { ...data });
      setIsSubmitting(false);
      setIsError(false);
      setIsSuccessful(true);
      console.log(resp.data);
      reset();
    } catch (error) {
      console.log(error);
      setIsSubmitting(false);
      setIsError(true);
    }
  };

  return (
    <Wrapper>
      {isSuccessful ? (
        <div tw="font-sans text-green-500 text-center flex flex-col space-y-4">
          <h2 tw="text-xl">Thanks for reaching out!</h2>
          <Breaker width="82.3%" />
          <p tw="text-xs">
            We'll get back to you as soon as we can. We can't wait to help make your next event one
            to remember.
          </p>
        </div>
      ) : (
        <div tw="flex flex-col space-y-7 md:(space-y-8)">
          <p tw="">
            We're thrilled that you're interested in working with us! Please share a few details
            about what you're looking for, and we'll work together to create an experience that
            perfectly meets your needs.
          </p>

          {isError && (
            <p tw="font-sans font-medium text-sm text-orange-200">
              Something went wrong! Try again or drop us a line at{" "}
              <a href="mailto:olivefoodsco@gmail.com" tw="underline">
                olivefoodsco@gmail.com
              </a>
              .
            </p>
          )}

          <form
            tw="flex flex-col space-y-5 sm:(space-y-4) md:(space-y-6) xl:(space-y-6) 2xl:(space-y-9)"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div tw="grid grid-cols-1 gap-y-5 sm:(gap-y-4) md:(grid-cols-2 gap-6) lg:(gap-5) xl:(gap-y-6) 2xl:(gap-y-9)">
              <Input
                type="text"
                label="First name*"
                register={{
                  ...register(`firstName`, {
                    required: `First name is required`,
                  }),
                }}
                error={errors?.firstName?.message}
              />
              <Input
                type="text"
                label="Last name*"
                register={{
                  ...register(`lastName`, {
                    required: `Last name is required`,
                  }),
                }}
                error={errors?.lastName?.message}
              />
              <Input
                type="email"
                label="Email*"
                register={{
                  ...register(`email`, {
                    required: `Email is required`,
                    validate: (value) => validateEmail(value),
                  }),
                }}
                error={errors?.email?.message}
              />

              <Controller
                control={control}
                name="eventType"
                rules={{
                  required: `Select an event type`,
                }}
                render={({ field: { onChange, value }, fieldState: { error } }) => (
                  <SelectMenu
                    label="Event type*"
                    placeholder="Select an event type"
                    value={value}
                    options={eventOptions}
                    onChange={onChange}
                    error={error?.message}
                  />
                )}
              />

              <Controller
                control={control}
                name="eventDate"
                render={({ field: { onChange, value } }) => (
                  <Calendar
                    label="Event date*"
                    error={errors?.eventDate?.message}
                    startDate={new Date(value)}
                    onChange={onChange}
                    value={value}
                  />
                )}
                rules={{
                  required: `Event date is required`,
                  validate: (value) => validateDate(new Date(value)),
                }}
              />
            </div>

            <TextArea
              label="Details*"
              rows={4}
              register={{
                ...register(`detail`, {
                  required: `Please provide details about your event`,
                }),
              }}
              error={errors?.detail?.message}
            />

            <Button label={isSubmitting ? <LoadingDots /> : `Submit`} type="submit" />
          </form>
        </div>
      )}
    </Wrapper>
  );
};

export default ContactForm;
