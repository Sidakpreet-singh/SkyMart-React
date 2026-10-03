import React, { useEffect, useRef, useState ,useContext} from "react";


const Hero = () => {

  

  const columns = 32;
  const rows = 24;
  const totalBoxes = columns * rows;

  const [snake, setSnake] = useState([]);

  // Hero reference
  const heroRef = useRef(null);

  // Current snake position
  const positionRef = useRef(
    Math.floor(Math.random() * totalBoxes)
  );

  // Directions
  // 0 = up
  // 1 = right
  // 2 = down
  // 3 = left
  const directionRef = useRef(
    Math.floor(Math.random() * 4)
  );

  // Mouse position
  const mouseRef = useRef(null);

  useEffect(() => {
    const hero = heroRef.current;

    /* ================================
       MOUSE MOVE
    ================================= */

    const handleMouseMove = (e) => {
      const rect = hero.getBoundingClientRect();

      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const col = Math.floor(
        (x / rect.width) * columns
      );

      const row = Math.floor(
        (y / rect.height) * rows
      );

      mouseRef.current = {
        col,
        row,
      };
    };

    /* ================================
       MOUSE LEAVE
    ================================= */

    const handleMouseLeave = () => {
      mouseRef.current = null;
    };

    hero.addEventListener(
      "mousemove",
      handleMouseMove
    );

    hero.addEventListener(
      "mouseleave",
      handleMouseLeave
    );

    /* ================================
       SNAKE MOVEMENT
    ================================= */

    const interval = setInterval(() => {
      const position = positionRef.current;

      const row = Math.floor(
        position / columns
      );

      const col = position % columns;

      let direction = directionRef.current;

      /* ================================
         FOLLOW MOUSE
      ================================= */

      if (mouseRef.current) {
        const mouseCol = mouseRef.current.col;
        const mouseRow = mouseRef.current.row;

        const dx = mouseCol - col;
        const dy = mouseRow - row;

        /*
          Move in the direction where
          the distance is greater
        */

        if (Math.abs(dx) > Math.abs(dy)) {
          // Mouse is to the right
          if (dx > 0 && direction !== 3) {
            direction = 1;
          }

          // Mouse is to the left
          if (dx < 0 && direction !== 1) {
            direction = 3;
          }
        } else {
          // Mouse is below
          if (dy > 0 && direction !== 0) {
            direction = 2;
          }

          // Mouse is above
          if (dy < 0 && direction !== 2) {
            direction = 0;
          }
        }
      }

      /* ================================
         RANDOM MOVEMENT
      ================================= */

      else {
        /*
          Sometimes randomly change direction
        */

        if (Math.random() < 0.25) {
          const possibleDirections = [
            0,
            1,
            2,
            3,
          ];

          /*
            Prevent immediate opposite turn
          */

          const validDirections =
            possibleDirections.filter(
              (newDirection) => {
                return !(
                  (direction === 0 &&
                    newDirection === 2) ||
                  (direction === 1 &&
                    newDirection === 3) ||
                  (direction === 2 &&
                    newDirection === 0) ||
                  (direction === 3 &&
                    newDirection === 1)
                );
              }
            );

          direction =
            validDirections[
              Math.floor(
                Math.random() *
                  validDirections.length
              )
            ];
        }
      }

      /* ================================
         NEXT POSITION
      ================================= */

      let nextPosition = position;

      // UP
      if (direction === 0 && row > 0) {
        nextPosition =
          position - columns;
      }

      // RIGHT
      if (
        direction === 1 &&
        col < columns - 1
      ) {
        nextPosition = position + 1;
      }

      // DOWN
      if (
        direction === 2 &&
        row < rows - 1
      ) {
        nextPosition =
          position + columns;
      }

      // LEFT
      if (direction === 3 && col > 0) {
        nextPosition = position - 1;
      }

      /* ================================
         WALL COLLISION
      ================================= */

      if (nextPosition === position) {
        const possibleDirections = [
          0,
          1,
          2,
          3,
        ];

        const validDirections =
          possibleDirections.filter(
            (newDirection) => {
              return !(
                (direction === 0 &&
                  newDirection === 2) ||
                (direction === 1 &&
                  newDirection === 3) ||
                (direction === 2 &&
                  newDirection === 0) ||
                (direction === 3 &&
                  newDirection === 1)
              );
            }
          );

        direction =
          validDirections[
            Math.floor(
              Math.random() *
                validDirections.length
            )
          ];
      } else {
        positionRef.current = nextPosition;
      }

      directionRef.current = direction;

      /* ================================
         UPDATE SNAKE
      ================================= */

      setSnake((prev) => {
        const newSnake = [
          ...prev,
          {
            position: positionRef.current,
            id: Date.now(),
          },
        ];

        /*
          Keep snake length around 12 boxes
        */

        return newSnake.slice(-12);
      });
    }, 180);

    /* ================================
       CLEANUP
    ================================= */

    return () => {
      clearInterval(interval);

      hero.removeEventListener(
        "mousemove",
        handleMouseMove
      );

      hero.removeEventListener(
        "mouseleave",
        handleMouseLeave
      );
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className="mx-auto mt-6 max-w-[1400px] px-6"
    >
      <div className="relative min-h-[520px] overflow-hidden rounded-2xl border border-slate-200 bg-white">

        {/* =================================
            BACKGROUND GRID
        ================================== */}

        <div
          className="
            absolute inset-0 grid
            grid-cols-[repeat(32,minmax(0,1fr))]
            grid-rows-[repeat(24,minmax(0,1fr))]
          "
        >
          {Array.from({
            length: totalBoxes,
          }).map((_, index) => {
            const row = Math.floor(
              index / columns
            );

            const col = index % columns;

            /* ================================
               STATIC CENTER PATTERN
            ================================= */

            const centerX = 16;
            const centerY = 12;

            const distance = Math.sqrt(
              Math.pow(
                col - centerX,
                2
              ) +
                Math.pow(
                  row - centerY,
                  2
                )
            );

            const isPattern =
              distance < 9 &&
              (row + col) % 3 === 0;

            /* ================================
               CHECK SNAKE
            ================================= */

            const snakeIndex =
              snake.findIndex(
                (item) =>
                  item.position === index
              );

            const isSnake =
              snakeIndex !== -1;

            return (
              <div
                key={index}
                className={`
                  relative
                  border-[0.5px]
                  ${
                    isPattern
                      ? "border-blue-100 bg-blue-50"
                      : "border-slate-100 bg-white"
                  }
                `}
              >
                {/* ==========================
                    SNAKE BOX
                =========================== */}

                {isSnake && (
                  <div
                    className={`
                      absolute inset-[2px]
                      rounded-[3px]
                      bg-blue-600
                      transition-all
                      duration-150
                      ${
                        snakeIndex ===
                        snake.length - 1
                          ? "scale-100 opacity-100"
                          : "scale-90 opacity-70"
                      }
                    `}
                  />
                )}
              </div>
            );
          })}
        </div>

        {/* =================================
            HERO CONTENT
        ================================== */}

        <div
          className="
            pointer-events-none
            relative z-10
            flex min-h-[520px]
            items-center
            justify-center
            px-6
            text-center
          "
        >
          <div className="max-w-3xl">

            {/* Small Label */}

            <p
              className="
                text-sm
                font-semibold
                uppercase
                tracking-[0.35em]
                text-blue-600
              "
            >
              SkyMart
            </p>

            {/* Main Heading */}

            <h1
              className="
                mt-5
                text-5xl
                font-bold
                tracking-tight
                text-slate-900
                md:text-7xl
              "
            >
              Everything you need.
            </h1>

            {/* Blue Heading */}

            <h2
              className="
                mt-2
                text-5xl
                font-bold
                tracking-tight
                text-blue-600
                md:text-7xl
              "
            >
              All in one place.
            </h2>

            {/* Description */}

            <p
              className="
                mx-auto
                mt-6
                max-w-xl
                text-base
                leading-7
                text-slate-600
                md:text-lg
              "
            >
              Discover products for your
              everyday life, carefully selected
              for you.
            </p>

            {/* CTA */}

            

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;