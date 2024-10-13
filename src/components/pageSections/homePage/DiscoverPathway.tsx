import { fieldsData } from "@/constants";

export const DiscoverPathway = () => {
  return (
    <div className="text-center py-16 px-5 mx-auto max-w-[1300px] lg:px-0 ">
      <h2 className="text-3xl md:text-4xl font-semibold bg-gradient-to-r from-[#007354] via-[#007756] to-[#00d79c] bg-clip-text text-transparent">
        Discover Your Pathway to Success in High-Paying Global Industries!
      </h2>
      <div className="mt-12 p-2 flex flex-wrap justify-center bg-accentColor rounded-xl">
        {fieldsData.map((field) => (
          <div
            key={field.value}
            className="w-1/2 md:w-1/3 lg:w-1/4 p-2 flex items-center "
          >
            <div className="flex items-center space-x-2 hover:bg-accentColor p-1 rounded-lg">
              <span className="text-2xl">{field.icon}</span>
              <p className="font-montserrat text-start text-[12px] md:text-[14px] text-subheading hover:text-primary-main font-semibold">
                {field.value}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
