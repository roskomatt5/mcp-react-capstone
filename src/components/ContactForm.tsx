import Button from "./Button";
import Input from "./Input";
import { useForm } from "react-hook-form";
import { server_calls } from "../api/servers";
import { useDispatch, useStore } from "react-redux";
import {
  chooseTitle,
  chooseLink,
  chooseGit_Repo,
  chooseDate_Created,
} from "../redux/slices/RootSlice";

interface ContactFormProps {
  id?: string[];
}

const ContactForm = (props: ContactFormProps) => {
  const { register, handleSubmit } = useForm({});
  const dispatch = useDispatch();
  const getCurrentTimestamp = () => new Date().toISOString();
  const store = useStore();
  const onSubmit = (data: any) => {
    console.log(`ID: ${props.id}`);
    console.log(props.id);
    console.log(data);
    if (props.id && props.id.length > 0) {
      server_calls.update(props.id[0], data);
      console.log(`Updated: ${data.title} ${props.id}`);
    } else {
      dispatch(chooseTitle(data.title));
      dispatch(chooseLink(data.link));
      dispatch(chooseGit_Repo(data.repo_link));
      const currentDateCreated = getCurrentTimestamp();
      dispatch(chooseDate_Created(currentDateCreated));

      server_calls.create(store.getState());
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="title">Project Title</label>
          <Input
            {...register("title")}
            name="title"
            placeholder="Name of Project..."
          />
        </div>
        <div>
          <label htmlFor="link">Link to Project</label>
          <Input
            {...register("link")}
            name="link"
            placeholder="Link to the Project..."
          />
        </div>
        <div>
          <label htmlFor="repo_link">Github Repository</label>
          <Input
            {...register("repo_link")}
            name="repo_link"
            placeholder="Repository Link..."
          />
        </div>
        {/* Hidden input field for date_created */}
        <input
          type="hidden"
          {...register("date_created")}
          value={getCurrentTimestamp()}
        />
        <div className="flex p-1">
          <Button className="flex justify-start m-3 bg-slate-300 p-2 rounded hover:bg-slate-800 text-white">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
