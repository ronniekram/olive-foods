import { useState } from "react";
import tw, { styled } from "twin.macro";
import axios from "axios";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { stringify } from "flatted";

import Input, { TextArea } from "../inputs/text";
import SelectMenu, { Option } from "../inputs/drop";
import Calendar from "../inputs/date-picker";
import Breaker from "../general/breaker";
import { Button } from "../general/button";

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
  ${tw`xl:(w-[55%])`};
  ${tw`flex flex-col space-y-7`};
  ${tw`text-grey text-sm font-sans`};
  ${tw`md:(text-xl)`};
  ${tw`bg-green-100 border border-orange-300`};
  ${tw`rounded-lg`};
  ${tw`px-5 pt-8 pb-12`};
  ${tw`md:(px-10 pt-14 pb-20) xl:(px-14 pt-14 pb-20)`};
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

//! ----------> COMPONENTS <----------
const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSuccessful, setIsSuccessful] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  const { register, handleSubmit, control, reset, formState: { errors } } = useForm<FormValues>({
    mode: `onSubmit`,
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
            We'll get back to you as soon as we can. We can't wait to help make your next event one to remember.
          </p>
        </div>
      ) : (
        <div tw="flex flex-col space-y-7 md:(space-y-8)">
          <p tw="text-sm md:(text-base) xl:(text-lg)">We're thrilled that you're interested in working with us! Please share a few details about what you're looking for, and we'll work together to create an experience that perfectly meets your needs.</p>

          {isError && <p tw="font-sans font-medium text-sm text-orange-200">Something went wrong! Try again or drop us a line at <a href="mailto:olivefoodsco@gmail.com" tw="underline">olivefoodsco@gmail.com</a>.</p>}

          <form tw="flex flex-col space-y-7 md:(space-y-8)" onSubmit={handleSubmit(onSubmit)}>
            <div tw="grid grid-cols-1 gap-y-7 md:(grid-cols-2 gap-x-5) xl:(gap-y-5)">
              <Input
                type="text"
                label="First Name*"
                register={{
                  ...register(`firstName`, {
                    required: `Required`,
                  })
                }}
                error={errors?.firstName?.message}
              />
              <Input
                type="text"
                label="Last Name*"
                register={{
                  ...register(`lastName`, {
                    required: `Required`,
                  })
                }}
                error={errors?.lastName?.message}
              />
              <Input
                type="email"
                label="Email*"
                register={{
                  ...register(`email`, {
                    required: `Required`,
                  })
                }}
                error={errors?.email?.message}
              />

              <Controller
                control={control}
                name="eventType"
                rules={{
                  required: `Required`,
                }}
                render={({  field: { onChange, value }, fieldState: { error } }) => (
                  <SelectMenu
                    label="Event Type*"
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
                    label="Event Date*"
                    error={errors?.eventDate?.message}
                    // startDate={null}
                    onChange={onChange}
                    value={value}
                  />
                )}
                rules={{ required: `Required` }}
              />
            </div>

            <TextArea
              label="Details*"
              rows={4}
              register={{
                ...register(`detail`, {
                  required: `Required`
                })
              }}
              error={errors?.detail?.message}
            />

            <Button label="Submit" type="submit" />
          </form>
        </div>
      )}
    </Wrapper>
  );
};

export default ContactForm;
