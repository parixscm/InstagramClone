import {
  ClientSafeProvider,
  getProviders,
  LiteralUnion,
  signIn,
} from "next-auth/react";
import { BuiltInProviderType } from "next-auth/providers";

function signInPage({
  providers,
}: {
  providers: Record<
    LiteralUnion<BuiltInProviderType, string>,
    ClientSafeProvider
  >;
}) {
  return (
    <>
      <div className="-mt-56 py-2 px-14 text-center min-h-screen flex flex-col items-center justify-center">
        <img
          src="https://links.papareact.com/ocw"
          alt="login_logo"
          className="w-80"
        />
        <p className="text-xs italic">
          This is NOT A REAL APP, just for EDUCATIONAL PURPOSES ONLY.
        </p>
        <div className="mt-40">
          {Object.values(providers).map(provider => (
            <div key={provider.name}>
              <button
                onClick={() => signIn(provider.id, { callbackUrl: "/" })}
                className="p-3 bg-blue-500 rounded-lg text-white"
              >
                Sign in with {provider.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: {
      providers,
    },
  };
}

export default signInPage;
