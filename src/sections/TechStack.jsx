import React from 'react'
import TitleHeader from '../components/TitleHeader'

import { useEffect ,useRef } from 'react'

const TechStack = () => {

  const containerRef = useRef(null);
  const highlightRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const highlight = highlightRef.current;
    const gridItems = container.querySelectorAll(".grid-item");
    const firstItem = container.querySelector(".grid-item");

    const highlightColors = [
      "#E24E1B",
      "#4381C1",
      "#F79824",
      "#04A777",
      "#5B8C5A",
      "#2176FF",
      "#818D92",
      "#22AAA1"
    ];

    gridItems.forEach((item, index) => {
      item.dataset.color = highlightColors[index % highlightColors.length];
    });

    const moveToElement = (element) => {
      if (element) {
        const rect = element.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();

        highlight.style.transform = `translate(${rect.left - containerRect.left}px, ${rect.top - containerRect.top}px)`;
        highlight.style.width = `${rect.width}px`;
        highlight.style.height = `${rect.height}px`;
        highlight.style.backgroundColor = element.dataset.color;
      }
    };

    const moveHighlight = (e) => {
      const hoveredElement = document.elementFromPoint(e.clientX, e.clientY);

      if (hoveredElement && hoveredElement.classList.contains("grid-item")) {
        moveToElement(hoveredElement);
      } else if (hoveredElement && hoveredElement.parentElement && hoveredElement.parentElement.classList.contains("grid-item")) {
        moveToElement(hoveredElement.parentElement);
      }
    };

    moveToElement(firstItem);

    container.addEventListener("mousemove", moveHighlight);

    return() => {
      container.removeEventListener("mousemove", moveHighlight);
    };

  }, []);
  return (
    <div id="skills" className="flex-center section-padding">
        <div className="w-full h-full md:px-10 px-5">
            <TitleHeader
                title="My Preferred Tech Stack"
                sub="The Skills I Bring to the Table"
            />

            <div className="container" ref={containerRef}>
              <div className="grid">
                <div className="grid-row">
                  <div className="grid-item">
                    <p>( html )</p>
                  </div>
                  <div className="grid-item">
                    <p>( css )</p>
                  </div>
                  <div className="grid-item">
                    <p>( javascript )</p>
                  </div>

                  </div>
                  <div className="grid-row">
                  <div className="grid-item">
                    <p>( gsap )</p>
                  </div>
                  <div className="grid-item">
                    <p>( react )</p>
                  </div>
                  <div className="grid-item">
                    <p>( next.js )</p>
                  </div>
                  <div className="grid-item">
                    <p>( project manager )</p>
                  </div>
                  <div className="grid-item">
                    <p>( karl )</p>
                  </div>
            </div>
        </div>

        <div className="highlight" ref={highlightRef}></div>
    </div>
        </div>
    </div>
  )
}

export default TechStack