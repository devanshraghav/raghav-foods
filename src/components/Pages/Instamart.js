import { useState } from "react";

const Section = ({ title, description, isVisible, setIsVisible }) => {
  return (
    <div className="p-2 m-2 border border-black">
      <h3>{title}</h3>
      {!isVisible ? (
        <button
          onClick={() => {
            setIsVisible(true);
          }}
        >
          Show
        </button>
      ) : (
        <button
          onClick={() => {
            setIsVisible(false);
          }}
        >
          Hide
        </button>
      )}

      {isVisible && <p>{description}</p>}
    </div>
  );
};

const Instamart = () => {
  const [visibleSection, setVisibleSection] = useState("about");
  return (
    <div>
      <h1 className="p-2 m-2 text-3xl font-bold">Instamart</h1>
      <Section
        title={"About Instamart"}
        description={`Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum`}
        isVisible={visibleSection === "about"}
        setIsVisible={(bool) =>
          bool ? setVisibleSection("about") : setVisibleSection("")
        }
      />
      <Section
        title={"Team Instamart"}
        description={`Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum`}
        isVisible={visibleSection === "team"}
        setIsVisible={(bool) =>
          bool ? setVisibleSection("team") : setVisibleSection("")
        }
      />
      <Section
        title={"Carrer Instamart"}
        description={`Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum`}
        isVisible={visibleSection === "carrer"}
        setIsVisible={(bool) =>
          bool ? setVisibleSection("carrer") : setVisibleSection("")
        }
      />
    </div>
  );
};

export default Instamart;
