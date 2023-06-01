import tw, { styled } from "twin.macro";
import { useForm, Controller } from "react-hook-form";

import Input, { TextArea } from "../inputs/text";
import SelectMenu, { Option } from "../inputs/drop";
import Calendar from "../inputs/date-picker";
import Breaker from "../general/breaker";
import { Button } from "../general/button";

//! ----------> TYPES <----------
type FormValues = {
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
  ${tw`text-green-500 text-sm font-sans`};
  ${tw`md:(text-xl)`};
  ${tw`bg-green-100 border border-orange-300`};
  ${tw`rounded-lg`};
  ${tw`px-5 pt-8 pb-12`};
  ${tw`md:(px-10 pt-14 pb-20) xl:(pt-14 pb-20)`};
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
  const { register, handleSubmit, control, formState: { errors, isSubmitting, isSubmitSuccessful } } = useForm<FormValues>({
    mode: `onSubmit`,
  });

  const onSubmit = (data: FormValues) => {
    console.table(data);
  };

  return (
    <Wrapper>
      {isSubmitSuccessful ? (
        <div tw="font-sans text-green-500 text-center flex flex-col space-y-4">
          <h2 tw="text-xl">Thanks for reaching out!</h2>
          <Breaker width="82.3%" />
          <p tw="text-xs">
            We'll get back to you as soon as we can. We can't wait to help make your next event one to remember.
          </p>
        </div>
      ) : (
        <form tw="flex flex-col space-y-7 md:(space-y-8)" onSubmit={handleSubmit(onSubmit)}>
          <p>We're thrilled that you're interested in working with us! Please share a few details about what you're looking for, and we'll work together to create an experience that perfectly meets your needs.</p>

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
                  startDate={null}
                  onChange={onChange}
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
      )}
    </Wrapper>
  );
};

export default ContactForm;
