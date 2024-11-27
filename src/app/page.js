export default function HomePage() {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen py-10">
        {/* Intro Section */}
        <section className="text-center">
          <h1 className="text-4xl font-bold">강대현 (Kang Daehyun)</h1>
          <p className="text-lg mt-4">
            안녕하세요! 저는 데이터 엔지니어이며, AI 및 데이터 관련 프로젝트에 열정을 가지고 있습니다.
          </p>
        </section>
  
        {/* Navigation Links */}
        <nav className="mt-8">
          <div className="flex space-x-8">
            <a
              href="/cv"
              className="text-black-500 underline"
            >
              자세한 이력
            </a>
          </div>
        </nav>

      </div>
    );
  }