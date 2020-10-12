import dynamic from "next/dynamic";

const DynamicComponentWithNoSSR = dynamic(() => import("../components/Home"), {
  ssr: false,
});

//export default () => <DynamicComponentWithNoSSR />;
export default () => <div>hi</div>;
