import React, { useState } from "react";
import props from 'prop-types';
import info from "./details";
import APp from "./app";
import Form from "./Form"
var userIsRegistered = true;
// import Input from "./input";
// import google(1).png from "./google(1).png"

function Initial(props) {
  const [page, setPage] = useState("");
  function google() {
    setPage();
  }
  return (
    <div className="maindiv">
    <div className="smalldiv">
      <h1>
        <strong>student</strong>
      </h1>
      <form className="form">
        <div>
          <button onClick ={<Form isRegistered={userIsRegistered} />} type="submit" className="googlebutton">
            <img
              className="googleimage"
              src="data:image/png;base64,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"
              alt="student"
              // icon="fa-brands fa-google"
            />
          </button>
          {/* <p>google</p> */}
        </div>
      </form>
      
    </div>
    <div className="smalldiv">
      <h1>
        <strong>teacher</strong>
      </h1>
      <form className="form">
        <div>
          <button onClick ={<Form isRegistered={userIsRegistered} />} type="submit" className="googlebutton">
            <img
              className="googleimage"
              src="https://cdn1.iconfinder.com/data/icons/indian-man-professions/512/03-512.png"
              alt="student"
              // icon="fa-brands fa-google"
            />
          </button>
          {/* <p>google</p> */}
        </div>
      </form>
      
    </div>
    <div className="smalldiv">
      <h1>
        <strong>warden</strong>
      </h1>
      <form className="form">
        <div>
          <button onClick ={<Form isRegistered={userIsRegistered} />} type="submit" className="googlebutton">
            <img
              className="googleimage"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIIAAACCCAMAAAC93eDPAAAAwFBMVEX///+AkZswN0NSXGiElZ8+R1EsMj9caHItNED/3NJfa3V1hY89RVH/39Xv8PEzOkYeJzY9SVj4m5hdS1QAECYAHDC2uLtzd34YIjImLjuTlZo4P0vhxr5odoBIUV1NV2LR0tSrrbHh4uMIFyoQHC3+ubOAg4lobHOfoab/59wlNEHIycxeYmrYjYzdi4rdop5QRk+4p6PTu7VmX2Slk5EAAB1PT1eKYmeOgYF3bnHyragAIzQPLTy+fn5ZWF4AABMtRmqfAAAJC0lEQVR4nO2bCXPayBKAoSUNAxLS5EUGDbIOZCLOZAO2cTbZ9f7/f/W6dRNDSBXSuN7RqcIMqKJPPX1Nz9Dr/eeKHc/TaSXpPLZVE6xCz5MN8bxwpRQgOS44cFYTMBwujrE6gq1gwHxtFFQy0nz8yNuqIkg8Dk7Q10+kP3KAe4kiBI2Bb+r9n0Q3fWCaGoLJA8BbAmJw4GGiBOGVs9EZAmQYMbZTQRBLcM4BkDjAVFjDxOPRWSWgGiLuqZiJleCDSwgDLlQEqJngI/2CjLiYKUGAcHRBQlCFwNkF4coQfiGqEHzDImm8Fm/9rhGSeZwjhNoFKWwhnncUHWau5+7i6wjxDi/sRBmTBU4196KIg29dEExUrxHmUYBOQlSKT+9wYPxX1gjAGHAHtZF2gIAhaWCG5Hm/FsZCc9BNiIoFSMzRwaWwVArWMqYEEXeA0FtKgOBSaG5KACCXXRD0EiwPeRiYVyQI0WD8jrwyERgYmbwUnXORDENkhzVkKhZEQJb/1g5zf2ByIdIulzX2ZLrc7fBeH88IfrzbLacTFesq4JvP/3ojnzccFNy8QvjyFuGLYoQ/Pn36/vHry/dPKN9fvn7EN3+oRZD34/X+jv/Yr8fj9dMPfodv7qVqhPH9nfD24+FwvPfEHY2VIwzHwwO+oozvDzhQjMBkdvNxRlD8RQTGlSGs2GP++OOTP49cYZfDpluiAR4Ow/V6eMAJWdMn6no985lND/4k71COR3qVT6QLezZXQxA/e8f9YX/Mi/miihLZR95zrARhsnC4kFQhOr7vlK/ck4I7CzX9hdh18jIxK6TD/DX/xHFjJQg2Vk++bxWVfBQV9bvl+1gtKbLIVIIfVSuHalUR+SC7qJvPie2iyg2CCA1Sf6aQyMDpcZW55WTB8rIJ77/ZQPmeKTLGTOLIlXR/vvnr5eWvTfZWulGsjgDnYpu+Uvn2gtXT5xcq2V7TrfJGuG1wpyyYHG4ov38va/5tXnKClw3IWD1B4qMFbL5iDfnlK1ok72rx8gsxMDigHvjffwPqwAFpqCbYSXhIyDnRKdEZkwVIJb3fWqYeyC1tjQhKkjgHWwneVCFArEmnaLPuys73SjhSXWCYSExUbEduuKUATXsx9g4DppSKcvXuAVMEA7Es+k+wwFppKdApAB52cfcAS48eN40XIGYzj9I2MsxmAhZxSsrxlt1CJEshs6eV8UpgKY8EmkZDVMoqpiEHKZYdhogtGgHzg37I0QZTUVROWcUkUrRMHvZHPkOT6GynLn5GRdNGgMnBnfR2ixphsetNXOAmbQjgRHVVxWJe4vnOnD5glJdWfongr+hblm2V6KbFu8paqPlqb9AHD+OCxYEqNuAWxgUP/Hq3sJPOZ9Z3DAoCPZDgJFjHckJAE7QT5/TbTvqOqN56W0y3QEyplM60gAhTAVb9bcSZ0z4BOiGY9U6YiYa/4uST5JV8ha7S2D410UVaX+LaAk42SPWQAxYMFiFYWRMwbH474iDatsipBONkQ9DMlk81QlNFKAbIlhPnxDtRdO6Y1ZqOVrene5c6TlS7WxK2xZlW3KN6Wr+JYFXaKRg0xq02p4KCcXELRxYs5HoQFQilQ+pYSRQXQqvBIXGB5fegrQajdH8LSo+oHBI/k/mE6QEDt718FTFW2HsToY+pogjQvJwd3SgR0GcYi9oimC/AKacYn61C0COWJ2tWxSxEYGWQNJ2smGlDbFy0VyEBo3GFQI7Jw7DpkIjAtfL9COv8dixyKeupDvCGNQLdxHGaDokIEAYNw2hlg2jr1dNraicI/X4Wlax6nCFoZm04oo3ggOlJq6YhdE4QMsesMmSB4ETVVGhYYdxOgHVAdXRlEFGjq6kFckyrOaa2S83Qd7K64jZJvNrEc4JThBE7zV5Z58eJBqWWME7fGhx2EmvSmoD6OScIA3aSHQgBr6kYsNK9da05wRxtFs8bYV3gzL1rCN7cwToiKnSD6epGi3xl5fGdIKI1y9Z2zyHQGbcSwbW3WFr7UVBcwG+MkQvgxc2IgMWULs4gGFWaMigxxIwYiks4LG4hsPF5ihtqOMt+7zxCIMsQnSP0ENcovEJH3d0UIist6EGUOdh5LVinWiBHjko/ulELmCOro1wUGEVyHoH+1QgJrrLDUgk320LmEUX+R2tw4/MITY9wk9glayzqi5s9gnJUsUjqa5GzvDARpwi9ZR0f/dszVQJlNYBq0DT7dxBsTSuVgBUF3Fw6bd1qAYH/c/o7CCmy5iNcZbstLPRnpTmQGqIL0bFRNXnzUgmZIbRyrObIylVMvoZ9i6CbQY2QrXTzkQXs2AYBNZsLZQfazyVLjmAyMajiAlW0QfFda63pyUOZsC8hSBmdIOTmy1o8EIwrmayE1gMtOpusR2VCIIRIy3ixgG5zLeNwnt94YJ1F0BvmCNYgf8d5mz2GGEvYLA5bv1OyWBSwBxK8uEUESjxoDgG1FK4i4EVBVrG13OSg/sKA/27hxgbt9xd6NkZa9DF/L64hiL0lSVus9b4fmgN4j8P7u2vmeHc/fKRr47YJevaRy290huYcwiA0Gwjj8TfJjy0rIUmXBsb7+wsIZrNwyw73YF4xlmmL7fCtK+iU9eN6eAGhGaARYbh+pPPaoo0smYuNHun98L5lx3bOIej9shVWIAzH38QPD/2yrdmYe/z1kJ9humAL/RNzzC88HF6519bZllSK/To/wnQJof8zAl66fhKtnWdYefzxfr0eo6wP1xd0h/zK9f0ray1A4oKGi+PT/nDY/ymg6judQ8D0COJPuvLpKFiLTeCJh/FOChT5U7eZmhhaYxhSEsmv5CDb7L/GS09kP1QTgpaWUWF++S4Q7RXlwz4VzL4oLm17r86erNLpNF0lWzoF7Oe/HQss0gpIKzse3Q98Ov07SebZld0dgZ1kG3PcCSM6IZ/vUzaG7fS3riLQYS4oTh0bmmbUQ8dXhGBpH/InhuxkkRblGxLc+aAZyhCyg2Vh45caUTGyVCKcl/8jvBMC2UAYvSeC1Tj4+D4IUfETHf8dtRA6dPDUeUctaNlKuzn830UwlCP844oPtWyen5tD4f6j4DS2fUW6J/ivlH8DqRvdRtE6KmwAAAAASUVORK5CYII="
              alt="student"
              // icon="fa-brands fa-google"
            />
          </button>
          {/* <p>google</p> */}
        </div>
      </form>
      
    </div>
    </div>
  );
}

export default Initial;