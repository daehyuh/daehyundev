export default function Cv() {
  return (
      <>
        <div className="w-full max-w-2xl print:max-w-full relative">
        <h2 className="print:hidden">이력</h2>
        <h2 className="hidden print:block print:mb-2">강대현 Kang DaeHyun</h2>
        
        <p className="space-x-1.5 hidden print:block text-sm"><a href="mailto:rkdeown10@naver.com">rkdeown10@naver.com</a></p>
        <article className="prose max-md:prose-sm prose-zinc dark:prose-invert my-8 min-w-full overflow-clip">

        <h3>학력</h3>
        <p><strong><a href="https://hufs.ac.kr">한국외국어대학교</a> 공과대학 컴퓨터공학부 재학</strong>
        <span className="text-muted-foreground float-end text-right">2023.3 - 현재</span>
        <br/>
        <span className="text-muted-foreground">중국어통번역학과 이중전공</span></p>
        <p><strong><a href="https://hanyang.sen.hs.kr/">한양공업고등학교</a> 컴퓨터네트워크과 졸업</strong>
        <span className="text-muted-foreground float-end text-right">2019.3 - 2023.1</span>
        <br/>
        <span className="text-muted-foreground">특별 입학, 공로 졸업</span></p>

        <h3>경력</h3>

        <p><strong><a href="collecti.me">WhiteHat School</a> 제2기 교육생</strong>
        <span className="text-muted-foreground float-end text-right">2024.4 - 2024.11</span><br/></p>
        <a href="https://collecti.me">포도청</a> - 한국형 USER NAME OSINT 오픈소스 개발 <sup><a href="https://github.com/Grape-Office">GitHub</a></sup>
        <ul>
        <li>Project Manager, 한국 커뮤니티 사이트에서 USER NAME(Nickname)기반으로 데이터를 수집하고 분석하는 오픈소스 정보 수집(OSINT) 오픈소스 개발
        <span className="text-[75%] block font-semibold">OSINT, Python, Data Analyst, Web, Docker</span></li>
        </ul>

        <p><strong><a href="collecti.me">쓰리이디엇츠</a> 대표</strong>
        <span className="text-muted-foreground float-end text-right">2023.8 - 2024.6</span><br/></p>
        <a href="https://collecti.me">컬렉타임</a> 유지보수 <sup><a href="https://github.com/swm-collectime">GitHub</a></sup>


        <p><strong><a href="https://swmaestro.org/sw/main/main.do">소프트웨어 마에스트로</a> 제14기 연수생</strong>
        <span className="text-muted-foreground float-end text-right">2023.4 - 2023.12</span><br/>
        <a href="https://collecti.me">컬렉타임</a> - 최적의 모임 일정 조율 서비스 <sup><a href="https://github.com/swm-collectime">GitHub</a></sup></p>
        <ul>
        <li>프로젝트 매니저 및 백엔드 API 개발
        <span className="text-[75%] block font-semibold">Kotlin, Gradle, Spring boot, MariaDB, Redis, JPA, Spring Security, Docker</span></li>
        <li>서비스 서버 구축
        <span className="text-[75%] block font-semibold">Ubuntu, Nginx, AWS, AWS S3, AWS Code Deploy, AWS ECR, Github Actions</span></li>
        </ul>

        <p><strong><a href="http://www.vitasoft.co.kr/">(주)비타소프트</a> 연구원</strong>
        <span className="text-muted-foreground float-end text-right">2021.9 - 2023.01</span><br/>
        AI 팀
        </p>
        <ul>
        <li> Traffic Object Detection, Drivable Area Segmentation, Lane Detection을 위한 멀티모달 학습 데이터 구축</li>
          <ul>
          <li> 2D Lidar, 4K Stereo Camera, Gyroscope, Magnetometer 데이터를 활용한 실시간 병렬 처리 및 저장 시스템 설계 및 개발
          <span className="text-[75%] block font-semibold">Python, OpenCV, Numpy, ZedSDK, YDlidarSDK</span></li>
          <li>4K Stereo Camera 데이터에서 객체 라벨링 및 주행 가능 구역 폴리곤 라벨링 작업
          <span className="text-[75%] block font-semibold">Labeled Data: 110K</span></li>
          </ul>
        </ul>

        <h3>개인 프로젝트</h3>
        <p><strong><a href="http://www.대현.com/">대현닷컴</a> - 마피아42 편리 기능 서비스 </strong> <sup><a href="https://github.com/daehyun-project">GitHub</a></sup>
        <span className="text-muted-foreground float-end text-right">2021.10 - 현재</span><br/>
        </p>
        <ul>
        <li> ReactJS Migration <span className="text-muted-foreground float-end text-right">2024.11</span>
        <span className="text-[75%] block font-semibold">React, Next.JS, Tailwind CSS</span></li>
        <li> PHP, Vanilla JS, Python, FastAPI, Mysql<span className="text-muted-foreground float-end text-right">2021.10 - 2024.11</span>
        <span className="text-[75%] block font-semibold">PHP, Vanilla JS, Python, FastAPI, Mysql</span>
        </li>
        </ul>
        <h3>자격, 인증</h3>
        <p><strong><a href="https://www.topcit.or.kr/">TOPCIT</a></strong>
        <span className="text-muted-foreground float-end text-right">2023.10</span><br/>
        Level 3(401점)</p>
        <p><strong><a href="https://www.q-net.or.kr/">정보처리산업기사</a></strong>
        <span className="text-muted-foreground float-end text-right">2023.9</span><br/>
        과정평가형</p>
        <h3>수상</h3>
        <p><strong><a href="https://hufs.ac.kr/">2024 HUFSummer Hackathon</a></strong><span className="text-muted-foreground float-end text-right">2024.6</span><br/>
        대상(1위)</p>
        <p><strong><a href="https://hufs.ac.kr/">2023 HUFSummer Hackathon</a></strong><span className="text-muted-foreground float-end text-right">2023.6</span><br/>
        우수상(3위)</p>

          </article>
        </div>
      </>
  );
}