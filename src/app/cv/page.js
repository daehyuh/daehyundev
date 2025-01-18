export default function Cv() {
  return (
      <>
        <div className="w-full max-w-2xl print:max-w-full relative">
        <h2 className="print:hidden">공개 이력서</h2>
        <h1 className="hidden print:block print:mb-2">강대현</h1>
        <h4 className="hidden print:block print:mb-2">한국외대 컴퓨터공학부 23학번<br></br>2004.03.18</h4>
        <p className="space-x-1.5 print:block text-sm"><a href="map:서울 경기도 광주시">경기도 광주시</a>
        <a href="mailto:rkdeown10@naver.com">rkdeown10@naver.com</a>
        <a href="tel:010-3822-2413">010-3822-2413</a></p>
        <article className="prose max-md:prose-sm prose-zinc dark:prose-invert my-8 min-w-full overflow-clip">

        <h3>학력</h3>
        <p><strong><a href="https://hufs.ac.kr">한국외국어대학교</a> 공과대학 컴퓨터공학부 재학</strong>
        <span className="text-muted-foreground float-end text-right">2023.3 - 현재<br></br>경기도 용인시</span>
        <br/>
        <span className="text-muted-foreground">SW인재전형 입학</span></p>
        <p><strong><a href="https://hanyang.sen.hs.kr/">한양공업고등학교</a> 컴퓨터네트워크과 졸업</strong>
        <span className="text-muted-foreground float-end text-right">2019.3 - 2023.1<br></br>서울 중구</span>
        <br/>
        <span className="text-muted-foreground">특별 입학, 공로 졸업</span></p>

        <h3>경력</h3>
        <p><strong><a href="https://collecti.me">쓰리이디엇츠</a> 대표</strong>
        <span className="text-muted-foreground float-end text-right">2023.8 - 2024.6<br></br>서울 송파구</span><br/></p>
        <a href="https://collecti.me">컬렉타임</a> - 최적의 모임 일정 조율 서비스 <sup><a href="https://github.com/swm-collectime">GitHub</a></sup>
        <ul>
        <li>프로젝트 유지보수
        <span className="text-[75%] block font-semibold">Ubuntu, Nginx, Oracle Cloude</span></li>
        </ul>
          
        <p><strong><a href="http://www.vitasoft.co.kr/">(주)비타소프트</a> 연구원</strong>
        <span className="text-muted-foreground float-end text-right">2021.09 - 2023.01<br></br>서울 구로구</span><br/>
        AI 팀
        </p>
        <span>멀티모달 인공지능 학습 데이터 구축업무</span>
          <ul>
          <li> 4K Stereo Camera, 2D Lidar, Gyroscope, Magnetometer 센서 실시간 병렬 처리 및 데이터 저장 시스템 설계 및 개발
          <span className="text-[75%] block font-semibold">Python, OpenCV, Numpy, Linux/Ubuntu</span></li>
          <li>학습데이터 수집 및 데이터라벨링 작업
          <span className="text-[75%] block font-semibold">수집 데이터: 600K<span className="text-decoration"></span></span>
          <span className="text-[75%] block font-semibold">라벨링 데이터: 110K<span className="text-decoration"></span></span></li>
          </ul>

        <h3>개인 프로젝트</h3>
        <p><strong><a href="http://www.대현.com/">대현닷컴</a> - 게임 마피아42 편리 기능 서비스 </strong> <sup><a href="https://github.com/daehyun-project">GitHub</a></sup>
        <span className="text-muted-foreground float-end text-right">2020.4 - 현재</span>
        <ul>
          <li>MAU(Monthly active users) 3.6K 이상의 트래픽의 실제운영 서비스
          <span className="text-[75%] block font-semibold">React, Vite, Python, FastAPI, Mysql<span className="text-decoration"></span></span>
          </li>
          </ul>
        </p>


        <h3>교육</h3>
        <p><strong><a href="collecti.me">WhiteHat School</a> 제2기 교육생</strong>
        <span className="text-muted-foreground float-end text-right">2024.4 - 2024.11</span><br/></p>
        <a href="https://collecti.me">포도청</a> - 한국형 USER NAME OSINT 오픈소스 개발 <sup><a href="https://github.com/Grape-Office">GitHub</a></sup>
        <ul>
        <li>Project Manager, 한국 커뮤니티 사이트에서 USER NAME 기반으로 데이터를 수집하고 분석하는 OSINT 오픈소스 개발
        <span className="text-[75%] block font-semibold">OSINT, Python, Data Analyst, Web, Docker</span></li>
        </ul>
        <p><strong><a href="https://swmaestro.org/sw/main/main.do">소프트웨어 마에스트로</a> 제14기 연수생</strong>
        <span className="text-muted-foreground float-end text-right">2023.4 - 2023.12</span><br/>
        <a href="https://collecti.me">컬렉타임</a> - 최적의 모임 일정 조율 서비스 <sup><a href="https://github.com/swm-collectime">GitHub</a></sup></p>
        <ul>
        <li>프로젝트 매니저 및 백엔드 API 개발
        <span className="text-[75%] block font-semibold">Kotlin, Gradle, Spring boot, MariaDB, Redis, JPA, Spring Security, Docker</span></li>
        <li>서비스 서버 구축 및 유지보수
        <span className="text-[75%] block font-semibold">Ubuntu, Nginx, AWS, AWS S3, AWS Code Deploy, AWS ECR, Github Actions</span></li>
        </ul>

        <h3>자격, 인증</h3>
        <p><strong><a href="https://www.topcit.or.kr/">TOPCIT</a></strong>
        <span className="text-muted-foreground float-end text-right">2023.10</span><br/>
        Level 3(401점)</p>
        <p><strong><a href="https://www.q-net.or.kr/">정보처리산업기사</a></strong>
        <span className="text-muted-foreground float-end text-right">2023.09</span><br/>
        과정평가형</p>
        <h3>수상</h3>
        <p><strong><a href="https://hufs.ac.kr/">HUFSummer Hackathon 1위</a></strong>
        <span className="text-muted-foreground float-end text-right">2024.06</span><br/>
        한국외국어대학교</p>
        <p><strong><a href="https://hufs.ac.kr/">HUFSummer Hackathon 3위</a></strong>
        <span className="text-muted-foreground float-end text-right">2023.06</span><br/>
        한국외국어대학교</p>
        <p><strong><a href="https://hanyang.sen.hs.kr/">컴퓨터네트워크과 소프트웨어 공모전 1위</a></strong>
        <span className="text-muted-foreground float-end text-right">2022.07</span><br/>
        한양공업고등학교</p>
        <p><strong><a href="https://hanyang.sen.hs.kr/">전공영어관련 알고리즘 대회 1위</a></strong>
        <span className="text-muted-foreground float-end text-right">2021.10</span><br/>
        한양공업고등학교</p>
        <p><strong><a href="https://hanyang.sen.hs.kr/">컴퓨터네트워크과 소프트웨어 공모전 2위</a></strong>
        <span className="text-muted-foreground float-end text-right">2021.07</span><br/>
        한양공업고등학교</p>
        <p><strong><a href="https://hanyang.sen.hs.kr/">전공영어관련 알고리즘대회 2위</a></strong>
        <span className="text-muted-foreground float-end text-right">2020.11</span><br/>
        한양공업고등학교</p>
        <p><strong><a href="https://hanyang.sen.hs.kr/">컴퓨터네트워크과 소프트웨어 공모전 1위</a></strong>
        <span className="text-muted-foreground float-end text-right">2020.08</span><br/>
        한양공업고등학교</p>

          </article>
        </div>
      </>
  );
}