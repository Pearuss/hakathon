/* eslint-disable react/react-in-jsx-scope */
import { Button, CircularProgress } from "@mui/material";
import _ from "lodash";

/* eslint-disable react/jsx-props-no-spreading */
const ButtonLoading = (props) => {
  const renderContent = () => {
    if (props.isLoading) {
      const loadingProps = props.loading;
      const { messageLoading } = props;
      return (
        <Button
          // className="w-full mt-5 py-4 text-white"
          {..._.omit(props, ["isLoading", "messageLoading", "isSuccess"])}
          disabled
        >
          <div className="flex items-center ">
            {messageLoading}
            &nbsp;
            <CircularProgress size={20} color="default" {...loadingProps} />
          </div>
        </Button>
      );
    }

    return (
      <Button {..._.omit(props, ["isLoading", "messageLoading", "isSuccess"])}>
        {props.children}
      </Button>
    );
  };

  return renderContent();
};

export default ButtonLoading;
