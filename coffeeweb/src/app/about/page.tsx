import Image from "next/image";

export default function About() {
  return (
    <div className="bg-black text-white ">

      <div className="relative  pt-20"> {/* pt-20 adds padding to offset the fixed header */}
        <Image
          className="h-[40rem] w-full object-cover"
          src="/images/c2.jpg"
          alt="About"
          height={500}
          width={500}
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-center">
          <h1 className="text-4xl font-bold text-black"><i>About</i></h1>
          <p className="text-lg text-black font-bold mt-4 px-6">
            <i>
              Welcome to our coffee corner, where our love for coffee runs deep! 
              Our journey began in 1942 and we are here to give you the best service...
            </i>    
          </p>
        </div>
      </div>

      {/* Cappuccino Section */}
      <div className="bg-black pt-10 pb-20" id="menu">
        <div className="flex flex-col md:flex-row items-center justify-center mx-auto">
          <Image
            src="/images/c4.jpg"
            alt="Cappuccino"
            className="rounded-full w-80 h-80 object-cover"
            width={500}
            height={500}
          />
          <div className="mt-6 md:mt-0 md:ml-8 text-center md:text-left">
            <p className="text-amber-500 text-4xl font-serif"><i>Cappuccino</i></p>
            <p className="text-lg mt-4 max-w-xl mx-auto">
              Traditionally served in a smaller cup, cappuccinos can be enjoyed plain or flavored with a sprinkle of cocoa or cinnamon on top. The balance of strong coffee and creamy milk makes it a favorite choice for coffee enthusiasts.
            </p>
          </div>
        </div>
      </div>

      {/* Black Coffee Section */}
      <div className="bg-black pt-10 pb-20">
        <div className="flex flex-col md:flex-row items-center justify-center mx-auto">
          <Image
            src="/images/c5.jpg"
            alt="Black Coffee"
            className="rounded-full w-80 h-80 object-cover"
            width={500}
            height={500}
          />
          <div className="mt-6 md:mt-0 md:ml-8 text-center md:text-left">
            <p className="text-amber-500 text-4xl font-serif"><i>Black Coffee</i></p>
            <p className="text-lg mt-4 max-w-xl mx-auto">
              Black coffee can be enjoyed plain or flavored with a sprinkle of cocoa or cinnamon on top. The balance of strong coffee makes it a favorite choice for coffee enthusiasts. Many people enjoy black coffee in the morning as a way to kickstart their day.
            </p>
          </div>
        </div>
      </div>

      {/* Cortado Section */}
      <div className="bg-black pt-10 pb-20">
        <div className="flex flex-col md:flex-row items-center justify-center mx-auto">
          <Image
            src="/images/c6.jpg"
            alt="Cortado"
            className="rounded-full w-80 h-80 object-cover"
            width={500}
            height={500}
          />
          <div className="mt-6 md:mt-0 md:ml-8 text-center md:text-left">
            <p className="text-amber-500 text-4xl font-serif"><i>Cortado</i></p>
            <p className="text-lg mt-4 max-w-xl mx-auto">
              Traditionally served in a smaller cup, cortado can be enjoyed plain or flavored with a sprinkle of cocoa or cinnamon on top. The balance of strong coffee and creamy milk makes it a favorite choice for coffee enthusiasts.
            </p>
          </div>
        </div>
      </div>

      {/* Espresso Section */}
      <div className="bg-black pt-10 pb-20">
        <div className="flex flex-col md:flex-row items-center justify-center mx-auto">
          <Image
            src="/images/c7.jpg"
            alt="Espresso"
            className="rounded-full w-80 h-80 object-cover"
            width={500}
            height={500}
          />
          <div className="mt-6 md:mt-0 md:ml-8 text-center md:text-left">
            <p className="text-amber-500 text-4xl font-serif"><i>Espresso</i></p>
            <p className="text-lg mt-4 max-w-xl mx-auto">
              Espresso is a concentrated form of coffee. It can be enjoyed plain or as a base for other drinks such as lattes and cappuccinos.
            </p>
          </div>
        </div>
      </div>

      {/* Latte Section */}
      <div className="bg-black pt-10 pb-20">
        <div className="flex flex-col md:flex-row items-center justify-center mx-auto">
          <Image
            src="/images/c8.jpg"
            alt="Latte"
            className="rounded-full w-80 h-80 object-cover"
            width={500}
            height={500}
          />
          <div className="mt-6 md:mt-0 md:ml-8 text-center md:text-left">
            <p className="text-amber-500 text-4xl font-serif"><i>Latte</i></p>
            <p className="text-lg mt-4 max-w-xl mx-auto">
              Lattes are served with a balance of coffee and creamy milk, often flavored with syrups or spices like cinnamon or cocoa.
            </p>
          </div>
        </div>
      </div>

      {/* Affogato Section */}
      <div className="bg-black pt-10 pb-20">
        <div className="flex flex-col md:flex-row items-center justify-center mx-auto">
          <Image
            src="/images/c9.webp"
            alt="Affogato"
            className="rounded-full w-80 h-80 object-cover"
            width={500}
            height={500}
          />
          <div className="mt-6 md:mt-0 md:ml-8 text-center md:text-left">
            <p className="text-amber-500 text-4xl font-serif"><i>Affogato</i></p>
            <p className="text-lg mt-4 max-w-xl mx-auto">
              Affogato is a coffee-based dessert made by pouring hot espresso over vanilla ice cream. It s a perfect blend of hot and cold!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
