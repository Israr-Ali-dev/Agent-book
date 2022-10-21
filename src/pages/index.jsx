import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { getCsrfToken, useSession, signIn } from "next-auth/react";
import Image from "next/image";
import Loginhero from "@assets/images/login-hero.png";
import Input from "@components/Input";
import Button from "@components/Button";
import Checkbox from "@components/Checkbox";
import LogoText from "@assets/icons/logos/logo-text.svg";
import { toast } from "react-toastify";

/**
 *  Test this component, not 100% reliable...
 */
const NextImage = ({ src, alt, ...props }) => {
  return (
    <div className="relative w-full h-full" {...props}>
      <Image src={src} layout="fill" alt={alt} objectFit="cover" />
    </div>
  );
};

const LoginPage = ({ csrfToken }) => {
  const { data: session, status } = useSession();
  const isUser = !!session?.user;

  const router = useRouter();

  const dashboardUrl = "/dashboard";
  //const fullCallbackUrl = router.basePath + dashboardUrl;

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (status === "authenticated") {
      return router.push(dashboardUrl);
    }
  }, [isUser, status, router]);

  /**
   *  Note: you need to set criteriaMode to 'all' for using messages.
   *
   *  Ref: https://react-hook-form.com/api/useformstate/errormessage#main
   */

  return (
    <div className=" items-center md:min-h-screen md:p-6 bg-primary">
      <div className="flex-1 max-w-5xl mx-auto overflow-hidden bg-white shadow-xl dark:bg-gray-800 text-center">
        <h2>Next JS App Boilerplate</h2>
      </div>
    </div>
  );
};

// export async function getServerSideProps(context) {
//   return {
//     props: {
//       csrfToken: await getCsrfToken(context),
//     },
//   };
// }

export default LoginPage;
