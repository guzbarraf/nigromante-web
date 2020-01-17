import { createGlobalStyle } from 'styled-components'

export const GlobalStyleBackAnimation = createGlobalStyle`
  
.firefly {
  position: fixed;
  left: 50%;
  top: 50%;
  width: 0.4vw;
  height: 0.4vw;
  margin: -0.2vw 0 0 9.8vw;
  animation: ease 200s alternate infinite;
  pointer-events: none;
}
.firefly::before, .firefly::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  transform-origin: -10vw;
}
.firefly::before {
  background: black;
  opacity: 0.4;
  animation: drift ease alternate infinite;
}
.firefly::after {
  background: white;
  opacity: 0;
  box-shadow: 0 0 0vw 0vw yellow;
  animation: drift ease alternate infinite, flash ease infinite;
}

.firefly:nth-child(1) {
  animation-name: move1;
}
.firefly:nth-child(1)::before {
  animation-duration: 9s;
}
.firefly:nth-child(1)::after {
  animation-duration: 9s, 6385ms;
  animation-delay: 0ms, 4263ms;
}

@keyframes move1 {
  0% {
    transform: translateX(19vw) translateY(13vh) scale(0.66);
  }
  3.5714285714% {
    transform: translateX(41vw) translateY(37vh) scale(0.91);
  }
  7.1428571429% {
    transform: translateX(-23vw) translateY(-9vh) scale(0.73);
  }
  10.7142857143% {
    transform: translateX(22vw) translateY(-47vh) scale(0.34);
  }
  14.2857142857% {
    transform: translateX(-45vw) translateY(22vh) scale(0.94);
  }
  17.8571428571% {
    transform: translateX(-17vw) translateY(22vh) scale(0.95);
  }
  21.4285714286% {
    transform: translateX(5vw) translateY(27vh) scale(0.63);
  }
  25% {
    transform: translateX(-33vw) translateY(9vh) scale(0.59);
  }
  28.5714285714% {
    transform: translateX(-10vw) translateY(-31vh) scale(0.26);
  }
  32.1428571429% {
    transform: translateX(-25vw) translateY(-30vh) scale(0.89);
  }
  35.7142857143% {
    transform: translateX(-38vw) translateY(-44vh) scale(0.65);
  }
  39.2857142857% {
    transform: translateX(-17vw) translateY(6vh) scale(0.54);
  }
  42.8571428571% {
    transform: translateX(37vw) translateY(-4vh) scale(0.67);
  }
  46.4285714286% {
    transform: translateX(31vw) translateY(9vh) scale(0.79);
  }
  50% {
    transform: translateX(-48vw) translateY(3vh) scale(0.93);
  }
  53.5714285714% {
    transform: translateX(38vw) translateY(-2vh) scale(0.56);
  }
  57.1428571429% {
    transform: translateX(12vw) translateY(-17vh) scale(0.46);
  }
  60.7142857143% {
    transform: translateX(0vw) translateY(10vh) scale(0.71);
  }
  64.2857142857% {
    transform: translateX(17vw) translateY(-14vh) scale(0.63);
  }
  67.8571428571% {
    transform: translateX(-27vw) translateY(-31vh) scale(0.32);
  }
  71.4285714286% {
    transform: translateX(1vw) translateY(40vh) scale(0.7);
  }
  75% {
    transform: translateX(-8vw) translateY(-19vh) scale(0.37);
  }
  78.5714285714% {
    transform: translateX(-14vw) translateY(6vh) scale(0.71);
  }
  82.1428571429% {
    transform: translateX(3vw) translateY(2vh) scale(0.29);
  }
  85.7142857143% {
    transform: translateX(31vw) translateY(1vh) scale(0.73);
  }
  89.2857142857% {
    transform: translateX(-24vw) translateY(-14vh) scale(0.88);
  }
  92.8571428571% {
    transform: translateX(13vw) translateY(34vh) scale(0.81);
  }
  96.4285714286% {
    transform: translateX(46vw) translateY(-44vh) scale(0.42);
  }
  100% {
    transform: translateX(-27vw) translateY(32vh) scale(0.35);
  }
}
.firefly:nth-child(2) {
  animation-name: move2;
}
.firefly:nth-child(2)::before {
  animation-duration: 16s;
}
.firefly:nth-child(2)::after {
  animation-duration: 16s, 8769ms;
  animation-delay: 0ms, 3990ms;
}

@keyframes move2 {
  0% {
    transform: translateX(47vw) translateY(49vh) scale(0.71);
  }
  3.5714285714% {
    transform: translateX(-22vw) translateY(-15vh) scale(0.62);
  }
  7.1428571429% {
    transform: translateX(49vw) translateY(41vh) scale(0.82);
  }
  10.7142857143% {
    transform: translateX(-27vw) translateY(-45vh) scale(0.3);
  }
  14.2857142857% {
    transform: translateX(-22vw) translateY(-23vh) scale(0.56);
  }
  17.8571428571% {
    transform: translateX(0vw) translateY(-40vh) scale(0.92);
  }
  21.4285714286% {
    transform: translateX(-46vw) translateY(-3vh) scale(0.56);
  }
  25% {
    transform: translateX(3vw) translateY(-34vh) scale(0.54);
  }
  28.5714285714% {
    transform: translateX(47vw) translateY(-19vh) scale(0.38);
  }
  32.1428571429% {
    transform: translateX(10vw) translateY(8vh) scale(0.61);
  }
  35.7142857143% {
    transform: translateX(5vw) translateY(3vh) scale(0.69);
  }
  39.2857142857% {
    transform: translateX(-14vw) translateY(-22vh) scale(0.76);
  }
  42.8571428571% {
    transform: translateX(0vw) translateY(18vh) scale(0.71);
  }
  46.4285714286% {
    transform: translateX(40vw) translateY(19vh) scale(0.77);
  }
  50% {
    transform: translateX(-27vw) translateY(25vh) scale(0.51);
  }
  53.5714285714% {
    transform: translateX(-16vw) translateY(2vh) scale(0.98);
  }
  57.1428571429% {
    transform: translateX(-8vw) translateY(-11vh) scale(0.75);
  }
  60.7142857143% {
    transform: translateX(21vw) translateY(38vh) scale(0.49);
  }
  64.2857142857% {
    transform: translateX(15vw) translateY(-26vh) scale(0.36);
  }
  67.8571428571% {
    transform: translateX(0vw) translateY(-45vh) scale(0.76);
  }
  71.4285714286% {
    transform: translateX(11vw) translateY(-47vh) scale(0.27);
  }
  75% {
    transform: translateX(-20vw) translateY(-14vh) scale(0.33);
  }
  78.5714285714% {
    transform: translateX(1vw) translateY(-45vh) scale(0.44);
  }
  82.1428571429% {
    transform: translateX(17vw) translateY(29vh) scale(0.59);
  }
  85.7142857143% {
    transform: translateX(-21vw) translateY(-37vh) scale(0.64);
  }
  89.2857142857% {
    transform: translateX(-14vw) translateY(-27vh) scale(0.39);
  }
  92.8571428571% {
    transform: translateX(-46vw) translateY(-17vh) scale(0.56);
  }
  96.4285714286% {
    transform: translateX(-47vw) translateY(-41vh) scale(0.51);
  }
  100% {
    transform: translateX(26vw) translateY(-26vh) scale(0.62);
  }
}
.firefly:nth-child(3) {
  animation-name: move3;
}
.firefly:nth-child(3)::before {
  animation-duration: 15s;
}
.firefly:nth-child(3)::after {
  animation-duration: 15s, 9878ms;
  animation-delay: 0ms, 5994ms;
}

@keyframes move3 {
  0% {
    transform: translateX(35vw) translateY(23vh) scale(0.83);
  }
  5% {
    transform: translateX(-31vw) translateY(-32vh) scale(0.95);
  }
  10% {
    transform: translateX(-36vw) translateY(40vh) scale(0.71);
  }
  15% {
    transform: translateX(3vw) translateY(19vh) scale(0.62);
  }
  20% {
    transform: translateX(-48vw) translateY(-2vh) scale(0.88);
  }
  25% {
    transform: translateX(-29vw) translateY(25vh) scale(0.43);
  }
  30% {
    transform: translateX(-6vw) translateY(18vh) scale(0.61);
  }
  35% {
    transform: translateX(11vw) translateY(7vh) scale(0.43);
  }
  40% {
    transform: translateX(39vw) translateY(-12vh) scale(0.84);
  }
  45% {
    transform: translateX(34vw) translateY(-1vh) scale(0.32);
  }
  50% {
    transform: translateX(11vw) translateY(-49vh) scale(0.97);
  }
  55% {
    transform: translateX(15vw) translateY(-20vh) scale(0.83);
  }
  60% {
    transform: translateX(22vw) translateY(24vh) scale(0.63);
  }
  65% {
    transform: translateX(0vw) translateY(14vh) scale(0.46);
  }
  70% {
    transform: translateX(2vw) translateY(-2vh) scale(0.91);
  }
  75% {
    transform: translateX(-22vw) translateY(16vh) scale(0.87);
  }
  80% {
    transform: translateX(-6vw) translateY(21vh) scale(0.78);
  }
  85% {
    transform: translateX(17vw) translateY(-17vh) scale(0.93);
  }
  90% {
    transform: translateX(-15vw) translateY(-25vh) scale(0.75);
  }
  95% {
    transform: translateX(-46vw) translateY(13vh) scale(0.33);
  }
  100% {
    transform: translateX(23vw) translateY(2vh) scale(0.56);
  }
}
.firefly:nth-child(4) {
  animation-name: move4;
}
.firefly:nth-child(4)::before {
  animation-duration: 11s;
}
.firefly:nth-child(4)::after {
  animation-duration: 11s, 7835ms;
  animation-delay: 0ms, 6091ms;
}

@keyframes move4 {
  0% {
    transform: translateX(26vw) translateY(39vh) scale(0.94);
  }
  4.347826087% {
    transform: translateX(7vw) translateY(7vh) scale(0.44);
  }
  8.6956521739% {
    transform: translateX(-49vw) translateY(-9vh) scale(0.49);
  }
  13.0434782609% {
    transform: translateX(17vw) translateY(-8vh) scale(0.39);
  }
  17.3913043478% {
    transform: translateX(5vw) translateY(-20vh) scale(0.78);
  }
  21.7391304348% {
    transform: translateX(41vw) translateY(-46vh) scale(0.59);
  }
  26.0869565217% {
    transform: translateX(-48vw) translateY(9vh) scale(0.88);
  }
  30.4347826087% {
    transform: translateX(-40vw) translateY(43vh) scale(0.46);
  }
  34.7826086957% {
    transform: translateX(-41vw) translateY(7vh) scale(0.4);
  }
  39.1304347826% {
    transform: translateX(-39vw) translateY(12vh) scale(0.86);
  }
  43.4782608696% {
    transform: translateX(25vw) translateY(37vh) scale(0.84);
  }
  47.8260869565% {
    transform: translateX(36vw) translateY(-3vh) scale(0.87);
  }
  52.1739130435% {
    transform: translateX(36vw) translateY(33vh) scale(0.72);
  }
  56.5217391304% {
    transform: translateX(4vw) translateY(-7vh) scale(0.94);
  }
  60.8695652174% {
    transform: translateX(1vw) translateY(25vh) scale(0.53);
  }
  65.2173913043% {
    transform: translateX(-24vw) translateY(-47vh) scale(0.78);
  }
  69.5652173913% {
    transform: translateX(-32vw) translateY(-17vh) scale(0.65);
  }
  73.9130434783% {
    transform: translateX(4vw) translateY(-2vh) scale(0.3);
  }
  78.2608695652% {
    transform: translateX(-9vw) translateY(-27vh) scale(0.81);
  }
  82.6086956522% {
    transform: translateX(26vw) translateY(2vh) scale(0.75);
  }
  86.9565217391% {
    transform: translateX(-29vw) translateY(-44vh) scale(0.6);
  }
  91.3043478261% {
    transform: translateX(-7vw) translateY(-3vh) scale(0.64);
  }
  95.652173913% {
    transform: translateX(30vw) translateY(21vh) scale(0.28);
  }
  100% {
    transform: translateX(-11vw) translateY(-30vh) scale(0.49);
  }
}
.firefly:nth-child(5) {
  animation-name: move5;
}
.firefly:nth-child(5)::before {
  animation-duration: 10s;
}
.firefly:nth-child(5)::after {
  animation-duration: 10s, 10353ms;
  animation-delay: 0ms, 4167ms;
}

@keyframes move5 {
  0% {
    transform: translateX(-35vw) translateY(-41vh) scale(0.96);
  }
  3.8461538462% {
    transform: translateX(-34vw) translateY(-32vh) scale(0.64);
  }
  7.6923076923% {
    transform: translateX(37vw) translateY(-28vh) scale(0.97);
  }
  11.5384615385% {
    transform: translateX(47vw) translateY(13vh) scale(0.52);
  }
  15.3846153846% {
    transform: translateX(36vw) translateY(-36vh) scale(0.26);
  }
  19.2307692308% {
    transform: translateX(41vw) translateY(-24vh) scale(0.63);
  }
  23.0769230769% {
    transform: translateX(28vw) translateY(42vh) scale(0.28);
  }
  26.9230769231% {
    transform: translateX(-10vw) translateY(35vh) scale(0.8);
  }
  30.7692307692% {
    transform: translateX(2vw) translateY(-38vh) scale(0.71);
  }
  34.6153846154% {
    transform: translateX(44vw) translateY(-9vh) scale(0.3);
  }
  38.4615384615% {
    transform: translateX(14vw) translateY(-43vh) scale(0.96);
  }
  42.3076923077% {
    transform: translateX(34vw) translateY(44vh) scale(0.45);
  }
  46.1538461538% {
    transform: translateX(5vw) translateY(19vh) scale(0.55);
  }
  50% {
    transform: translateX(-12vw) translateY(1vh) scale(0.46);
  }
  53.8461538462% {
    transform: translateX(-2vw) translateY(26vh) scale(0.78);
  }
  57.6923076923% {
    transform: translateX(-5vw) translateY(-24vh) scale(0.9);
  }
  61.5384615385% {
    transform: translateX(-20vw) translateY(27vh) scale(0.93);
  }
  65.3846153846% {
    transform: translateX(7vw) translateY(42vh) scale(0.9);
  }
  69.2307692308% {
    transform: translateX(21vw) translateY(-1vh) scale(0.8);
  }
  73.0769230769% {
    transform: translateX(-15vw) translateY(50vh) scale(0.96);
  }
  76.9230769231% {
    transform: translateX(-13vw) translateY(-2vh) scale(0.74);
  }
  80.7692307692% {
    transform: translateX(-40vw) translateY(45vh) scale(0.35);
  }
  84.6153846154% {
    transform: translateX(-49vw) translateY(-18vh) scale(0.53);
  }
  88.4615384615% {
    transform: translateX(-30vw) translateY(33vh) scale(0.72);
  }
  92.3076923077% {
    transform: translateX(-48vw) translateY(-37vh) scale(0.87);
  }
  96.1538461538% {
    transform: translateX(25vw) translateY(-20vh) scale(0.84);
  }
  100% {
    transform: translateX(23vw) translateY(36vh) scale(0.56);
  }
}
.firefly:nth-child(6) {
  animation-name: move6;
}
.firefly:nth-child(6)::before {
  animation-duration: 13s;
}
.firefly:nth-child(6)::after {
  animation-duration: 13s, 7945ms;
  animation-delay: 0ms, 1219ms;
}

@keyframes move6 {
  0% {
    transform: translateX(21vw) translateY(4vh) scale(0.33);
  }
  4.7619047619% {
    transform: translateX(-23vw) translateY(0vh) scale(1);
  }
  9.5238095238% {
    transform: translateX(47vw) translateY(7vh) scale(0.72);
  }
  14.2857142857% {
    transform: translateX(-36vw) translateY(-44vh) scale(0.31);
  }
  19.0476190476% {
    transform: translateX(-4vw) translateY(49vh) scale(0.33);
  }
  23.8095238095% {
    transform: translateX(38vw) translateY(27vh) scale(0.92);
  }
  28.5714285714% {
    transform: translateX(0vw) translateY(-7vh) scale(0.81);
  }
  33.3333333333% {
    transform: translateX(-19vw) translateY(-35vh) scale(0.57);
  }
  38.0952380952% {
    transform: translateX(-27vw) translateY(34vh) scale(0.44);
  }
  42.8571428571% {
    transform: translateX(-37vw) translateY(-5vh) scale(0.6);
  }
  47.619047619% {
    transform: translateX(25vw) translateY(-45vh) scale(0.48);
  }
  52.380952381% {
    transform: translateX(0vw) translateY(32vh) scale(0.66);
  }
  57.1428571429% {
    transform: translateX(-1vw) translateY(24vh) scale(0.56);
  }
  61.9047619048% {
    transform: translateX(48vw) translateY(44vh) scale(0.78);
  }
  66.6666666667% {
    transform: translateX(-31vw) translateY(9vh) scale(0.84);
  }
  71.4285714286% {
    transform: translateX(22vw) translateY(1vh) scale(0.28);
  }
  76.1904761905% {
    transform: translateX(30vw) translateY(-11vh) scale(0.97);
  }
  80.9523809524% {
    transform: translateX(-36vw) translateY(-36vh) scale(0.52);
  }
  85.7142857143% {
    transform: translateX(-8vw) translateY(7vh) scale(0.83);
  }
  90.4761904762% {
    transform: translateX(18vw) translateY(-29vh) scale(0.94);
  }
  95.2380952381% {
    transform: translateX(45vw) translateY(17vh) scale(0.94);
  }
  100% {
    transform: translateX(-10vw) translateY(18vh) scale(0.55);
  }
}
.firefly:nth-child(7) {
  animation-name: move7;
}
.firefly:nth-child(7)::before {
  animation-duration: 14s;
}
.firefly:nth-child(7)::after {
  animation-duration: 14s, 9961ms;
  animation-delay: 0ms, 2909ms;
}

@keyframes move7 {
  0% {
    transform: translateX(25vw) translateY(-35vh) scale(0.87);
  }
  4.5454545455% {
    transform: translateX(-43vw) translateY(-30vh) scale(0.74);
  }
  9.0909090909% {
    transform: translateX(14vw) translateY(-32vh) scale(0.86);
  }
  13.6363636364% {
    transform: translateX(-11vw) translateY(50vh) scale(0.56);
  }
  18.1818181818% {
    transform: translateX(43vw) translateY(-20vh) scale(0.88);
  }
  22.7272727273% {
    transform: translateX(-9vw) translateY(-3vh) scale(0.9);
  }
  27.2727272727% {
    transform: translateX(37vw) translateY(37vh) scale(0.54);
  }
  31.8181818182% {
    transform: translateX(-22vw) translateY(-21vh) scale(0.31);
  }
  36.3636363636% {
    transform: translateX(26vw) translateY(-12vh) scale(0.5);
  }
  40.9090909091% {
    transform: translateX(-13vw) translateY(-41vh) scale(0.84);
  }
  45.4545454545% {
    transform: translateX(4vw) translateY(16vh) scale(0.56);
  }
  50% {
    transform: translateX(32vw) translateY(31vh) scale(0.99);
  }
  54.5454545455% {
    transform: translateX(23vw) translateY(-37vh) scale(0.91);
  }
  59.0909090909% {
    transform: translateX(45vw) translateY(-21vh) scale(0.27);
  }
  63.6363636364% {
    transform: translateX(-41vw) translateY(4vh) scale(0.32);
  }
  68.1818181818% {
    transform: translateX(14vw) translateY(26vh) scale(0.38);
  }
  72.7272727273% {
    transform: translateX(34vw) translateY(-34vh) scale(0.26);
  }
  77.2727272727% {
    transform: translateX(41vw) translateY(-34vh) scale(0.49);
  }
  81.8181818182% {
    transform: translateX(45vw) translateY(-48vh) scale(0.7);
  }
  86.3636363636% {
    transform: translateX(-25vw) translateY(-10vh) scale(0.44);
  }
  90.9090909091% {
    transform: translateX(-46vw) translateY(36vh) scale(0.85);
  }
  95.4545454545% {
    transform: translateX(-31vw) translateY(44vh) scale(0.98);
  }
  100% {
    transform: translateX(50vw) translateY(3vh) scale(0.33);
  }
}
.firefly:nth-child(8) {
  animation-name: move8;
}
.firefly:nth-child(8)::before {
  animation-duration: 17s;
}
.firefly:nth-child(8)::after {
  animation-duration: 17s, 5630ms;
  animation-delay: 0ms, 4361ms;
}

@keyframes move8 {
  0% {
    transform: translateX(8vw) translateY(-2vh) scale(0.55);
  }
  3.5714285714% {
    transform: translateX(35vw) translateY(-23vh) scale(0.29);
  }
  7.1428571429% {
    transform: translateX(-36vw) translateY(49vh) scale(1);
  }
  10.7142857143% {
    transform: translateX(-15vw) translateY(-32vh) scale(0.9);
  }
  14.2857142857% {
    transform: translateX(50vw) translateY(-17vh) scale(0.47);
  }
  17.8571428571% {
    transform: translateX(-47vw) translateY(39vh) scale(0.85);
  }
  21.4285714286% {
    transform: translateX(24vw) translateY(-22vh) scale(0.38);
  }
  25% {
    transform: translateX(33vw) translateY(-44vh) scale(0.35);
  }
  28.5714285714% {
    transform: translateX(26vw) translateY(4vh) scale(0.31);
  }
  32.1428571429% {
    transform: translateX(-46vw) translateY(-11vh) scale(0.52);
  }
  35.7142857143% {
    transform: translateX(-48vw) translateY(-1vh) scale(0.71);
  }
  39.2857142857% {
    transform: translateX(14vw) translateY(-32vh) scale(0.87);
  }
  42.8571428571% {
    transform: translateX(-30vw) translateY(-45vh) scale(0.47);
  }
  46.4285714286% {
    transform: translateX(-36vw) translateY(-33vh) scale(0.91);
  }
  50% {
    transform: translateX(-12vw) translateY(37vh) scale(0.61);
  }
  53.5714285714% {
    transform: translateX(25vw) translateY(-42vh) scale(0.57);
  }
  57.1428571429% {
    transform: translateX(-30vw) translateY(-18vh) scale(0.45);
  }
  60.7142857143% {
    transform: translateX(47vw) translateY(9vh) scale(0.75);
  }
  64.2857142857% {
    transform: translateX(40vw) translateY(-32vh) scale(0.35);
  }
  67.8571428571% {
    transform: translateX(-47vw) translateY(4vh) scale(0.87);
  }
  71.4285714286% {
    transform: translateX(38vw) translateY(-42vh) scale(0.57);
  }
  75% {
    transform: translateX(-44vw) translateY(-37vh) scale(0.87);
  }
  78.5714285714% {
    transform: translateX(-24vw) translateY(48vh) scale(0.4);
  }
  82.1428571429% {
    transform: translateX(-4vw) translateY(10vh) scale(0.77);
  }
  85.7142857143% {
    transform: translateX(-45vw) translateY(-4vh) scale(0.82);
  }
  89.2857142857% {
    transform: translateX(39vw) translateY(39vh) scale(0.47);
  }
  92.8571428571% {
    transform: translateX(-13vw) translateY(-2vh) scale(0.77);
  }
  96.4285714286% {
    transform: translateX(-49vw) translateY(41vh) scale(0.74);
  }
  100% {
    transform: translateX(-25vw) translateY(33vh) scale(0.66);
  }
}
.firefly:nth-child(9) {
  animation-name: move9;
}
.firefly:nth-child(9)::before {
  animation-duration: 17s;
}
.firefly:nth-child(9)::after {
  animation-duration: 17s, 9721ms;
  animation-delay: 0ms, 3116ms;
}

@keyframes move9 {
  0% {
    transform: translateX(-20vw) translateY(2vh) scale(0.71);
  }
  5% {
    transform: translateX(-25vw) translateY(11vh) scale(0.69);
  }
  10% {
    transform: translateX(39vw) translateY(-39vh) scale(0.48);
  }
  15% {
    transform: translateX(49vw) translateY(24vh) scale(0.39);
  }
  20% {
    transform: translateX(30vw) translateY(-38vh) scale(0.74);
  }
  25% {
    transform: translateX(13vw) translateY(6vh) scale(1);
  }
  30% {
    transform: translateX(15vw) translateY(36vh) scale(0.82);
  }
  35% {
    transform: translateX(-12vw) translateY(32vh) scale(0.75);
  }
  40% {
    transform: translateX(37vw) translateY(21vh) scale(0.76);
  }
  45% {
    transform: translateX(-15vw) translateY(-35vh) scale(0.61);
  }
  50% {
    transform: translateX(-48vw) translateY(20vh) scale(0.67);
  }
  55% {
    transform: translateX(-37vw) translateY(-38vh) scale(0.47);
  }
  60% {
    transform: translateX(17vw) translateY(-20vh) scale(0.34);
  }
  65% {
    transform: translateX(0vw) translateY(37vh) scale(0.75);
  }
  70% {
    transform: translateX(-18vw) translateY(10vh) scale(0.73);
  }
  75% {
    transform: translateX(33vw) translateY(-4vh) scale(0.74);
  }
  80% {
    transform: translateX(-15vw) translateY(15vh) scale(0.95);
  }
  85% {
    transform: translateX(24vw) translateY(4vh) scale(0.34);
  }
  90% {
    transform: translateX(37vw) translateY(-39vh) scale(0.67);
  }
  95% {
    transform: translateX(-39vw) translateY(34vh) scale(0.82);
  }
  100% {
    transform: translateX(4vw) translateY(15vh) scale(0.85);
  }
}
.firefly:nth-child(10) {
  animation-name: move10;
}
.firefly:nth-child(10)::before {
  animation-duration: 13s;
}
.firefly:nth-child(10)::after {
  animation-duration: 13s, 5629ms;
  animation-delay: 0ms, 1568ms;
}

@keyframes move10 {
  0% {
    transform: translateX(-4vw) translateY(-49vh) scale(0.52);
  }
  4.7619047619% {
    transform: translateX(25vw) translateY(20vh) scale(0.87);
  }
  9.5238095238% {
    transform: translateX(43vw) translateY(41vh) scale(0.83);
  }
  14.2857142857% {
    transform: translateX(20vw) translateY(-31vh) scale(0.62);
  }
  19.0476190476% {
    transform: translateX(32vw) translateY(6vh) scale(0.94);
  }
  23.8095238095% {
    transform: translateX(0vw) translateY(42vh) scale(0.62);
  }
  28.5714285714% {
    transform: translateX(4vw) translateY(34vh) scale(0.32);
  }
  33.3333333333% {
    transform: translateX(-41vw) translateY(49vh) scale(0.39);
  }
  38.0952380952% {
    transform: translateX(-19vw) translateY(-7vh) scale(0.84);
  }
  42.8571428571% {
    transform: translateX(-35vw) translateY(-3vh) scale(0.56);
  }
  47.619047619% {
    transform: translateX(-8vw) translateY(-5vh) scale(0.7);
  }
  52.380952381% {
    transform: translateX(-4vw) translateY(-44vh) scale(0.38);
  }
  57.1428571429% {
    transform: translateX(11vw) translateY(-30vh) scale(0.34);
  }
  61.9047619048% {
    transform: translateX(49vw) translateY(-45vh) scale(0.82);
  }
  66.6666666667% {
    transform: translateX(12vw) translateY(-15vh) scale(0.72);
  }
  71.4285714286% {
    transform: translateX(-46vw) translateY(44vh) scale(0.77);
  }
  76.1904761905% {
    transform: translateX(40vw) translateY(41vh) scale(0.96);
  }
  80.9523809524% {
    transform: translateX(10vw) translateY(24vh) scale(0.41);
  }
  85.7142857143% {
    transform: translateX(-11vw) translateY(-37vh) scale(0.97);
  }
  90.4761904762% {
    transform: translateX(47vw) translateY(41vh) scale(0.32);
  }
  95.2380952381% {
    transform: translateX(45vw) translateY(34vh) scale(0.34);
  }
  100% {
    transform: translateX(35vw) translateY(6vh) scale(0.71);
  }
}
.firefly:nth-child(11) {
  animation-name: move11;
}
.firefly:nth-child(11)::before {
  animation-duration: 18s;
}
.firefly:nth-child(11)::after {
  animation-duration: 18s, 5990ms;
  animation-delay: 0ms, 8412ms;
}

@keyframes move11 {
  0% {
    transform: translateX(47vw) translateY(-8vh) scale(0.85);
  }
  4.347826087% {
    transform: translateX(-43vw) translateY(-20vh) scale(0.48);
  }
  8.6956521739% {
    transform: translateX(47vw) translateY(-5vh) scale(0.4);
  }
  13.0434782609% {
    transform: translateX(32vw) translateY(35vh) scale(0.84);
  }
  17.3913043478% {
    transform: translateX(-26vw) translateY(25vh) scale(0.31);
  }
  21.7391304348% {
    transform: translateX(18vw) translateY(-34vh) scale(0.69);
  }
  26.0869565217% {
    transform: translateX(-24vw) translateY(5vh) scale(0.62);
  }
  30.4347826087% {
    transform: translateX(36vw) translateY(-1vh) scale(0.63);
  }
  34.7826086957% {
    transform: translateX(12vw) translateY(42vh) scale(0.83);
  }
  39.1304347826% {
    transform: translateX(29vw) translateY(32vh) scale(0.51);
  }
  43.4782608696% {
    transform: translateX(29vw) translateY(19vh) scale(0.26);
  }
  47.8260869565% {
    transform: translateX(-5vw) translateY(32vh) scale(0.69);
  }
  52.1739130435% {
    transform: translateX(-14vw) translateY(37vh) scale(0.65);
  }
  56.5217391304% {
    transform: translateX(-45vw) translateY(-47vh) scale(0.68);
  }
  60.8695652174% {
    transform: translateX(-43vw) translateY(-37vh) scale(0.46);
  }
  65.2173913043% {
    transform: translateX(45vw) translateY(15vh) scale(0.31);
  }
  69.5652173913% {
    transform: translateX(12vw) translateY(-19vh) scale(0.64);
  }
  73.9130434783% {
    transform: translateX(11vw) translateY(-8vh) scale(0.99);
  }
  78.2608695652% {
    transform: translateX(-32vw) translateY(50vh) scale(0.44);
  }
  82.6086956522% {
    transform: translateX(-23vw) translateY(48vh) scale(0.87);
  }
  86.9565217391% {
    transform: translateX(-19vw) translateY(-20vh) scale(0.55);
  }
  91.3043478261% {
    transform: translateX(28vw) translateY(-19vh) scale(0.43);
  }
  95.652173913% {
    transform: translateX(-39vw) translateY(-27vh) scale(0.34);
  }
  100% {
    transform: translateX(17vw) translateY(-9vh) scale(0.43);
  }
}
.firefly:nth-child(12) {
  animation-name: move12;
}
.firefly:nth-child(12)::before {
  animation-duration: 12s;
}
.firefly:nth-child(12)::after {
  animation-duration: 12s, 8229ms;
  animation-delay: 0ms, 6696ms;
}

@keyframes move12 {
  0% {
    transform: translateX(49vw) translateY(-9vh) scale(0.34);
  }
  4% {
    transform: translateX(50vw) translateY(14vh) scale(0.92);
  }
  8% {
    transform: translateX(9vw) translateY(-39vh) scale(0.58);
  }
  12% {
    transform: translateX(32vw) translateY(-49vh) scale(0.95);
  }
  16% {
    transform: translateX(17vw) translateY(-21vh) scale(0.88);
  }
  20% {
    transform: translateX(45vw) translateY(-5vh) scale(0.94);
  }
  24% {
    transform: translateX(-12vw) translateY(-13vh) scale(0.59);
  }
  28% {
    transform: translateX(-32vw) translateY(-5vh) scale(1);
  }
  32% {
    transform: translateX(-23vw) translateY(-10vh) scale(0.26);
  }
  36% {
    transform: translateX(36vw) translateY(-24vh) scale(0.72);
  }
  40% {
    transform: translateX(-3vw) translateY(36vh) scale(0.45);
  }
  44% {
    transform: translateX(-41vw) translateY(-13vh) scale(0.71);
  }
  48% {
    transform: translateX(-25vw) translateY(-43vh) scale(0.82);
  }
  52% {
    transform: translateX(-10vw) translateY(48vh) scale(0.78);
  }
  56% {
    transform: translateX(-42vw) translateY(18vh) scale(0.53);
  }
  60% {
    transform: translateX(42vw) translateY(26vh) scale(0.91);
  }
  64% {
    transform: translateX(-8vw) translateY(38vh) scale(0.3);
  }
  68% {
    transform: translateX(37vw) translateY(-1vh) scale(0.45);
  }
  72% {
    transform: translateX(26vw) translateY(-15vh) scale(0.61);
  }
  76% {
    transform: translateX(42vw) translateY(44vh) scale(0.59);
  }
  80% {
    transform: translateX(-2vw) translateY(10vh) scale(0.36);
  }
  84% {
    transform: translateX(8vw) translateY(-10vh) scale(0.55);
  }
  88% {
    transform: translateX(-41vw) translateY(-42vh) scale(0.79);
  }
  92% {
    transform: translateX(33vw) translateY(-19vh) scale(0.92);
  }
  96% {
    transform: translateX(35vw) translateY(-47vh) scale(0.97);
  }
  100% {
    transform: translateX(16vw) translateY(-10vh) scale(0.9);
  }
}
.firefly:nth-child(13) {
  animation-name: move13;
}
.firefly:nth-child(13)::before {
  animation-duration: 9s;
}
.firefly:nth-child(13)::after {
  animation-duration: 9s, 6156ms;
  animation-delay: 0ms, 3080ms;
}

@keyframes move13 {
  0% {
    transform: translateX(-6vw) translateY(0vh) scale(0.56);
  }
  5% {
    transform: translateX(28vw) translateY(22vh) scale(0.3);
  }
  10% {
    transform: translateX(33vw) translateY(-20vh) scale(0.57);
  }
  15% {
    transform: translateX(-21vw) translateY(-7vh) scale(0.89);
  }
  20% {
    transform: translateX(-7vw) translateY(-9vh) scale(0.41);
  }
  25% {
    transform: translateX(-7vw) translateY(-4vh) scale(0.98);
  }
  30% {
    transform: translateX(47vw) translateY(26vh) scale(0.7);
  }
  35% {
    transform: translateX(42vw) translateY(-5vh) scale(0.49);
  }
  40% {
    transform: translateX(38vw) translateY(26vh) scale(0.79);
  }
  45% {
    transform: translateX(-6vw) translateY(13vh) scale(0.57);
  }
  50% {
    transform: translateX(-18vw) translateY(-36vh) scale(0.62);
  }
  55% {
    transform: translateX(-35vw) translateY(-21vh) scale(0.91);
  }
  60% {
    transform: translateX(-6vw) translateY(-27vh) scale(0.7);
  }
  65% {
    transform: translateX(-18vw) translateY(45vh) scale(0.28);
  }
  70% {
    transform: translateX(11vw) translateY(41vh) scale(0.67);
  }
  75% {
    transform: translateX(-34vw) translateY(14vh) scale(0.49);
  }
  80% {
    transform: translateX(19vw) translateY(-30vh) scale(0.92);
  }
  85% {
    transform: translateX(-40vw) translateY(48vh) scale(0.56);
  }
  90% {
    transform: translateX(-39vw) translateY(-14vh) scale(0.73);
  }
  95% {
    transform: translateX(0vw) translateY(-35vh) scale(0.93);
  }
  100% {
    transform: translateX(16vw) translateY(-6vh) scale(0.32);
  }
}
.firefly:nth-child(14) {
  animation-name: move14;
}
.firefly:nth-child(14)::before {
  animation-duration: 10s;
}
.firefly:nth-child(14)::after {
  animation-duration: 10s, 6564ms;
  animation-delay: 0ms, 1383ms;
}

@keyframes move14 {
  0% {
    transform: translateX(46vw) translateY(44vh) scale(0.5);
  }
  4.5454545455% {
    transform: translateX(12vw) translateY(3vh) scale(0.77);
  }
  9.0909090909% {
    transform: translateX(-27vw) translateY(-34vh) scale(0.72);
  }
  13.6363636364% {
    transform: translateX(-36vw) translateY(22vh) scale(0.65);
  }
  18.1818181818% {
    transform: translateX(7vw) translateY(13vh) scale(0.66);
  }
  22.7272727273% {
    transform: translateX(23vw) translateY(49vh) scale(0.66);
  }
  27.2727272727% {
    transform: translateX(30vw) translateY(24vh) scale(0.68);
  }
  31.8181818182% {
    transform: translateX(48vw) translateY(-35vh) scale(0.64);
  }
  36.3636363636% {
    transform: translateX(26vw) translateY(42vh) scale(0.84);
  }
  40.9090909091% {
    transform: translateX(5vw) translateY(21vh) scale(0.45);
  }
  45.4545454545% {
    transform: translateX(-47vw) translateY(-6vh) scale(0.32);
  }
  50% {
    transform: translateX(-14vw) translateY(-45vh) scale(0.49);
  }
  54.5454545455% {
    transform: translateX(1vw) translateY(27vh) scale(0.84);
  }
  59.0909090909% {
    transform: translateX(-31vw) translateY(-45vh) scale(0.65);
  }
  63.6363636364% {
    transform: translateX(-49vw) translateY(31vh) scale(0.28);
  }
  68.1818181818% {
    transform: translateX(48vw) translateY(-24vh) scale(0.74);
  }
  72.7272727273% {
    transform: translateX(28vw) translateY(-36vh) scale(0.88);
  }
  77.2727272727% {
    transform: translateX(4vw) translateY(37vh) scale(0.27);
  }
  81.8181818182% {
    transform: translateX(-34vw) translateY(43vh) scale(0.63);
  }
  86.3636363636% {
    transform: translateX(6vw) translateY(44vh) scale(0.45);
  }
  90.9090909091% {
    transform: translateX(-38vw) translateY(-1vh) scale(0.99);
  }
  95.4545454545% {
    transform: translateX(-32vw) translateY(28vh) scale(0.45);
  }
  100% {
    transform: translateX(39vw) translateY(-9vh) scale(0.76);
  }
}
.firefly:nth-child(15) {
  animation-name: move15;
}
.firefly:nth-child(15)::before {
  animation-duration: 15s;
}
.firefly:nth-child(15)::after {
  animation-duration: 15s, 10611ms;
  animation-delay: 0ms, 5717ms;
}

@keyframes move15 {
  0% {
    transform: translateX(-6vw) translateY(3vh) scale(0.73);
  }
  4.347826087% {
    transform: translateX(-49vw) translateY(-6vh) scale(0.59);
  }
  8.6956521739% {
    transform: translateX(-2vw) translateY(6vh) scale(0.53);
  }
  13.0434782609% {
    transform: translateX(40vw) translateY(15vh) scale(0.87);
  }
  17.3913043478% {
    transform: translateX(25vw) translateY(35vh) scale(0.27);
  }
  21.7391304348% {
    transform: translateX(-17vw) translateY(13vh) scale(1);
  }
  26.0869565217% {
    transform: translateX(41vw) translateY(-24vh) scale(0.6);
  }
  30.4347826087% {
    transform: translateX(-27vw) translateY(39vh) scale(0.41);
  }
  34.7826086957% {
    transform: translateX(-32vw) translateY(-32vh) scale(0.57);
  }
  39.1304347826% {
    transform: translateX(5vw) translateY(19vh) scale(0.73);
  }
  43.4782608696% {
    transform: translateX(-25vw) translateY(-35vh) scale(0.31);
  }
  47.8260869565% {
    transform: translateX(-5vw) translateY(11vh) scale(0.66);
  }
  52.1739130435% {
    transform: translateX(-15vw) translateY(14vh) scale(0.97);
  }
  56.5217391304% {
    transform: translateX(-40vw) translateY(41vh) scale(0.81);
  }
  60.8695652174% {
    transform: translateX(-4vw) translateY(-46vh) scale(0.77);
  }
  65.2173913043% {
    transform: translateX(-37vw) translateY(46vh) scale(0.41);
  }
  69.5652173913% {
    transform: translateX(-21vw) translateY(-3vh) scale(0.64);
  }
  73.9130434783% {
    transform: translateX(-13vw) translateY(38vh) scale(0.57);
  }
  78.2608695652% {
    transform: translateX(49vw) translateY(-48vh) scale(0.87);
  }
  82.6086956522% {
    transform: translateX(-40vw) translateY(-20vh) scale(0.71);
  }
  86.9565217391% {
    transform: translateX(-27vw) translateY(-32vh) scale(0.71);
  }
  91.3043478261% {
    transform: translateX(41vw) translateY(37vh) scale(0.37);
  }
  95.652173913% {
    transform: translateX(13vw) translateY(-22vh) scale(0.52);
  }
  100% {
    transform: translateX(27vw) translateY(-37vh) scale(0.81);
  }
}
@keyframes drift {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes flash {
  0%, 30%, 100% {
    opacity: 0;
    box-shadow: 0 0 0vw 0vw yellow;
  }
  5% {
    opacity: 1;
    box-shadow: 0 0 2vw 0.4vw yellow;
  }
}


`