export default function Team() {

  const team = [
    {
      name: "محمدرضا",
      image: "/images/team/team1.jpg",
    },
    {
      name: "مهدی",
      image: "/images/team/team2.jpg",
    },
    {
      name: "زهرا",
      image: "/images/team/team3.jpg",
    },
  ];

  return (
    <section className="container mx-auto py-20">

      <h2 className="text-3xl font-bold mb-10">
        تیم ما
      </h2>

      <div className="grid md:grid-cols-3 gap-8">

        {team.map((member) => (
          <div
            key={member.name}
            className="bg-white rounded-2xl p-6"
          >
            <img
              src={member.image}
              alt=""
              className="w-full rounded-xl"
            />

            <h3 className="font-bold mt-4">
              {member.name}
            </h3>

            <p className="text-gray-500">
              UI/UX Designer
            </p>
          </div>
        ))}

      </div>

    </section>
  );
}