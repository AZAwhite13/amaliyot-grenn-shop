import { Form, Input } from "antd";
import GoogleIcon from "../../../../assets/icon/google";
import FacebookIcon from "../../../../assets/icon/facebook";
import type { LoginType } from "../../../../@types";
import {
  useLoginMutate,
  useSignWithGoogle,
} from "../../../../hooks/useQuery/useQueryActions";
import { LoadingOutlined } from "@ant-design/icons";
import { signInWithGoogle } from "../../../../config";

const Login = () => {
  const input_style: string = "h-[40px] mt-2 !border-[#46A358]";
  const icon_style: string =
    "border h-[40px] border-[#EAEAEA] rounded-md flex items-center justify-center gap-3 mb-4 cursor-pointer";

  const { mutate, isPending } = useLoginMutate();
  const { mutate: mutateGoogle } = useSignWithGoogle();
  const onAuth = (e: LoginType) => {
    mutate(e);
  };
  return (
    <div className="w-4/5 m-auto">
      <div className="mt-5 mb-2">
        <p>Enter your email and password to login.</p>
        <Form onFinish={onAuth}>
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: "Plase input your email",
              },
            ]}
          >
            <Input
              type="email"
              placeholder="almamun_uxui@outlook.com"
              className={`${input_style}`}
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Plase input your password",
              },
            ]}
          >
            <Input.Password
              placeholder="***********"
              className={`${input_style}`}
            />
          </Form.Item>
          <p className="text-end mt-2 text-[#46A358] text-sm cursor-pointer">
            Forgot Password?
          </p>
          <button className="bg-[#46A358] w-full mt-4 text-white h-[40px] rounded-md">
            {isPending ? <LoadingOutlined /> : "Login"}
          </button>
        </Form>
        <div className="flex items-center justify-center mt-5 mb-5 gap-4">
          <div className="w-[30%] h-[2px] bg-[#EAEAEA]"></div>
          <p className="w-[40%]text-[#3D3D3D] text-[13px]">Or login with</p>
          <div className="w-[30%] h-[2px] bg-[#EAEAEA]"></div>
        </div>
        <div
          onClick={async () => {
            mutateGoogle();
          }}
          className={`${icon_style}`}
        >
          <GoogleIcon />
          <p>Login with Google</p>
        </div>
        <div className={`${icon_style}`}>
          <FacebookIcon />
          <p>Login with Facebook</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
