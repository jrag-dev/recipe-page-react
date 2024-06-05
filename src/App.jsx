
function App() {

  return (
    <main className="bg-white-custom max-w-[768px] w-full rounded-xl md:my-24">
      <div className="md:m-8 md:py-8">
        <img className="md:rounded-xl" src='./images/image-omelette.jpeg' alt='simple omelette' />
      </div>
      <section className="px-8">
        <article className="">
          <h1 className="font-young-serif text-4xl text-dark-charcoal-custom font-bold py-6">Simple Omelette Recipe</h1>
          <p className="text-wenge-brown-custom">
            An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked
            to perfection, optionally filled with your choice of cheese, vegetables, or meats.
          </p>
        </article>
        <article className="bg-rose-white-custom mt-8 py-6 flex flex-col gap-4 rounded-xl">
          <p className="text-dark-raspberry-custom font-bold px-6 text-xl">Preparation time</p>
          <ul className="list-disc px-10 text-dark-raspberry-custom flex flex-col gap-3">
            <li><p className="text-black-custom"><strong className="text-dark-charcoal-custom">Total</strong>: Approximately 10 minutes</p></li>
            <li><p className="text-black-custom"><strong className="text-dark-charcoal-custom">Preparation</strong>: 5 minutes</p></li>
            <li><p className="text-black-custom"><strong className="text-dark-charcoal-custom">Cooking</strong>: 5 minutes</p></li>
          </ul>
        </article>
        <article className="mb-2 py-6 flex flex-col gap-4">
          <h2 className="text-2xl text-nutmeg-custom font-normal font-young-serif">Ingredients</h2>

          <ul className="list-disc px-10 text-nutmeg-custom flex flex-col gap-3">
            <li><span className="text-wenge-brown-custom">2-3 large eggs</span></li>
            <li><span className="text-wenge-brown-custom">Salt, to taste</span></li>
            <li><span className="text-wenge-brown-custom">Pepper, to taste</span></li>
            <li><span className="text-wenge-brown-custom">21 tablespoon of butter or oil</span></li>
            <li><span className="text-wenge-brown-custom">Optional fillings: cheese, diced vegetables, cooked meats, herbs</span></li>
          </ul>
        </article>

        <div className="w-full h-[1px] bg-light-grey-custom"></div>

        <article className="w-full py-8 flex flex-col gap-4">
          <h2 className="text-2xl text-nutmeg-custom font-normal font-young-serif">Instructions</h2>

          <ol className="list-decimal text-nutmeg-custom pl-10 flex flex-col gap-3">
            <li><span className="text-wenge-brown-custom font-semibold">Beat the eggs</span>: <span className="text-wenge-brown-custom">In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed.
              You can add a tablespoon of water or milk for a fluffier texture.</span></li>

            <li><span className="text-wenge-brown-custom font-semibold">Heat the pan</span>: <span className="text-wenge-brown-custom">Place a non-stick frying pan over medium heat and add butter or oil.</span></li>

            <li><span className="text-wenge-brown-custom font-semibold">Cook the omelette</span>: <span className="text-wenge-brown-custom">Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure
              the eggs evenly coat the surface.</span></li>

            <li><span className="text-wenge-brown-custom font-semibold">Add fillings (optional)</span>: <span className="text-wenge-brown-custom">When the eggs begin to set at the edges but are still slightly runny in the
              middle, sprinkle your chosen fillings over one half of the omelette.</span></li>

            <li><span className="text-wenge-brown-custom font-semibold">Fold and serve</span>: <span className="text-wenge-brown-custom">As the omelette continues to cook, carefully lift one edge and fold it over the
              fillings. Let it cook for another minute, then slide it onto a plate.</span></li>

            <li><span className="text-wenge-brown-custom font-semibold">Enjoy</span>: <span className="text-wenge-brown-custom">Serve hot, with additional salt and pepper if needed.</span></li>
          </ol>
        </article>

        <div className="w-full h-[1px] bg-light-grey-custom"></div>

        <article className="w-full py-8 flex flex-col gap-4">
          <h2 className="text-2xl text-nutmeg-custom font-normal font-young-serif">Nutrition</h2>

          <p className="text-wenge-brown-custom">The table below shows nutritional values per serving without the additional fillings.</p>

          <div className="w-full flex items-center">
            <p className="ml-8 flex-1 text-wenge-brown-custom">Calories</p>
            <p className="-ml-8 flex-1 text-nutmeg-custom font-bold">277kcal</p>
          </div>

          <div className="w-full h-[1px] bg-light-grey-custom"></div>

          <div className="w-full flex items-center">
            <p className="ml-8 flex-1 text-wenge-brown-custom">Carbs</p>
            <p className="-ml-8 flex-1 text-nutmeg-custom font-bold">0g</p>
          </div>

          <div className="w-full h-[1px] bg-light-grey-custom"></div>

          <div className="w-full flex items-center">
            <p className="ml-8 flex-1 text-wenge-brown-custom">Protein</p>
            <p className="-ml-8 flex-1 text-nutmeg-custom font-bold">20g</p>
          </div>

          <div className="w-full h-[1px] bg-light-grey-custom"></div>

          <div className="w-full flex items-centerbefore:content-['Hello_World']">
            <p className="ml-8 flex-1 text-wenge-brown-custom">Fat</p>
            <p className="-ml-8 flex-1 text-nutmeg-custom font-bold">22g</p>
          </div>
        </article>

      </section >
    </main >
  )
}

export default App
