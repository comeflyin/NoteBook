<template>
  <div class="login">
    <h1>注册</h1>
    <div class="login-wrapper">
      <div class="avatar">
        <img
          src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAMAAzAMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAEBQMGAQIHAAj/xABGEAACAQMCAwQHBAcHAgYDAAABAgMABBEFIRIxQQYTUXEUIjJhgZGhByNCsTNSYnLB0fAVgpKisuHxJMIlNFNj0uImQ0T/xAAZAQADAQEBAAAAAAAAAAAAAAABAgMABAX/xAAnEQACAgICAgICAgMBAAAAAAAAAQIRAyESMQRBIlETYTJCIzNxFP/aAAwDAQACEQMRAD8A7Jpw9V/3qLxtSezvHSM8KA7+JqaTUWiVmm4FUDmTsKpKErEi9UQNku3XJPWhv7VtLK4Cyu7OB66xoW4R0zjlQsms2yq7rLEzDJAyfpQVohWLibeSTLv7yd6abaR1eN435G3IulvNFcwrLC6yRuMqwOQRQd/+mHlSbQLtra7ubZR92wWZQT7JOxH0o67uneXPCOWKXHGTeiPkQ/HJxNhzpyo9UUlthPO2UjGBzJO1MZZ2jAAKueuDRydk4mb/APQ/EUBGE417zZaJnvbMoFd+I/qg5NLpbkSTpDaqQ0jcKBuh5k/AZPwrQTozVjJrtiBHaR8cp5A+yg8WP9GpLa0ELGRz3s7+1Iw38h4D3Co45ra2iaOAmVl3IiHEzH4dawby8bHc6dJv1kkVR/OpsdKguVHJHA5XxArfYY3oWJL8txTTQKP1EiJx/eJ3+VEMnFy2NAJtlc5yM1nKnqKFe3uM/dzxr+9Fn/uqOSG8QZUxyeWVNYwVPAkycLZyNwwO6nxFaWkpliIc/eIeF8dT4/Hn8aDW8uID/wBRaz8H6wAbHyqeORLhvSLSQFscJU8m8/CsCj2ogd2u34qAwPAUW91HMz2047qQcuL8/KlpnIzsKvjTaonKkx5Zj/pkra4A9Hk2/CaBt74rEi93yHjWZ74mFx3f4T1pOMuQeSoF5Y5fKjdN5vtSo3kYlVCRxHfBNFWV13ZbCZyBvmqSToXrscNjwpTcrmd9s7+GaJ9P23T60vmnDTOSg5+7+VLjhKwtoxaoxVvVJ38KV6kxl1JYJPYiiEgXxYkjPkAPr5VaNPH3TedQatpUWoouWeKeP2JU5j+Y91DJkbdF/FcYTUpFd4Vxuo+VZGK0e11SEkd3b3QBxlH7s/I7fWto4dRkbhGmycXP9NHj/V/CpOLPYWfE/wCxJo6GW/u5gpKoqxDzGSfz/rkTbmNw2SCMimWg2b2OmxxTACViXlwfxE5NeullvLjuYmKQp+klHMHwX3+/p58qwycTxvIby5HICa4urx/RrOMKEwHJ9lfM/wABRsekQsM3jNct1DnCD+6Nvnk++jbWCO2gWKFQqDkB/W9Q3lwIUbfGBknwpJSvoSKAr620m0h4JLSL7whVjjj9Z26Yx151BpuhdzK011NM/EpVIJJA4jUkEgsAC3Ic/DrzonTrR5Jhf3SnvCMQo3/6lPPP7R6/AebQnAyaHqhn+jEcaRqFRQqjkF2Fb0qg1uxfVDp4u4zcA44ADz8M8s02ocXHtAtPoxXqwTWOLxrGNq9WvEKyDmsYzUE1srksPUccmXatp5UgRpJGVUUZLM2ABUdneQXkfeW00cqZxlGBGa1OrNfoX30PpiiKQ93dR7xSe/8Aip5VBp6xXliyqvBcxkh1PQg4I+mKdTwiaMqdmHstjPCfGq3bS3Nnqd5w2NzIxZWcwoCvFwgHmRsQoPx8c08JtdGaUkGRAqgGDy38/wCv68fS57tum3OmFjfW96p7o4lX24nXhdfMHeluryn03gullSzQArwRsVkP7RHh4UMvkcFdCwxW6ZDa2aXGm4fZ5iZOIc1PTHkMVFFNcwRt31pKxA9dlIwcdRk/GmcckbxK0TAoRkEbCob4KUj74kQcY73HVf5ZxXjYvJyQk+L7Z1vHFraMxN3kayKp4WUEEjp/X9eIz+0asSqoGABjGwpXOPv5Mbesehr38OQ4pxro9Z3bpGdl51Ob6TB9RaBtkcx7KxwegqUpJg+o3yrSjHkKm6BjOxJ9VdzU9pLIrGUR+qNs9M1Fa2rXD75WNTlm5UT3xubj0K0HDEi5kbHIdPif96aco1SDFNk6Tz3ZMcQCKPbkHMe4e/39KLSLu0WOLCqo5VtDGsUYRBhQK3JxvXKyqIp5OAEZ3xQlrEZ272QYQHCA9cdT8c4FbM/fTKgGeL8vGvalfR2EAY7sdkUdaA8YtukHZAH+1QXblLaV13KoxA+FVC61S8ud3mZF6KmwqTRvS5b9DC0hVWHHliVx1o3R0vwpKDlJlV7LpLc9obA5Zn74Ss3iBkkn+utddNLrHRNP0+5e4tLVI5H5sM7Dnt4UxJro8nOs0k16PNw43jjTImdQwBYAtyyedY4h4il/aPS7bUtLnWe3jlkWNjEWG6tjoaoFpp1jJawy9yDxoD7R5/OpJR42zrw4p5ZcY0dOLKNyRipUqg9ndEsbnV/XtEeKCIuytlhxE4X8m+VX5cKoHLw6UJJLoWcXCTi/RVftGkddHijU+rJKA3vAGcUq+zeV/TbyIbKY1bh5b5q56vpsGrWb2l0CUbBBHMHxFVCxjk0Ca7htWJYtgtIuSQOVdMc8F47x+7IQ8bJlzXHovg5CgbuVbW7gkb2Z27lz4HBK5+OR/epJbdorhGHfxrIviNjTmYxappbNGcKwypPNWH8QRXGdWTBPE/kiS90+G64XOUmT9HNHs6fHw91Bvezwh7a7QCbH3cgGFlHu9/iKL027W4i4eMPIh4Xx0I50RPBHcQmOVAVbp4e/zpkSdoqSM7ILVo27tJWZmPJxnKgHrud/Ki0tUkR4xLMsZ2KcQII8N6NtItptPuAO+T10fGOIeNATXHoULng4n4wgTl6x8a0PGwcXozyZJSSQ6W+AGAmcDx5UuluMyueHmepqKwuzdCRZE7uWMjjXORuMgg+H+9aybOwPMHrXTijH0SyqUXxl2PdPH3R5+11NEv7J8qV2Fw6RZdAE4t2Ar1/qTxxnuI+N3bgjU/jY8vhUJRdtjRdkc15LNILK0AMvDlt/VRc4y31wOuKY2FolpDwKeJieJ3PN26k1HptktnAQSGmkbjmkxu79T+QHgMCjAN6VsbozUFy/qlR1qc7DNJ9bvvQrK4ugvE0aEov6zclHxOKVhj2GaeFZHlXcMxUH3KSPzzWupabDfoolLKVzhl51nTITY6VawSvkwwqHcnmQNz880OdQu7xeLS7ZGiPszzsVRvIAEkVgptStGsGgWMW7K8h95x+VFxT2MDraxzW6OThYw4yT5UFHp11NKZ9Zu1ljXZLWFSkQ97Z3c+e3upqsSKAFUADkAKwZzlL+TIp7pklWKK3klZhkkbKvmaHkk1KaQRw28MCfiklfjPwUfxpgRXudYQGMV4q+rPE7Do0fCD8jVdPZe6jeQ288ARmLKjcXqZ3IB8M1a8gcyK9xA9QfKinqhoTlB2hLoOnXVhHIsqw8Uj8Uj8ZJboOnICjpvT4yWhMEo/UYFfrvRLTRqcFxn3msGeIblxWsFtuyC0lu5WPpNqsI90oatLu1srtxFcqnecwOTEe6jVdX9lhWHRXG4zjl7qxlJp2hOezlmTs8nlkUztraO1t1hiHqAdetSCMgerIw9zb0K9zPbOe+t+8h/wDVhG4815/KsPLJOaqTF94V07U4pFjCJPsZRyD8gG8xyPiAPCncT97ErjqKCu4LfVbJ0UiRHUhWB/rfIHyqDRblzEqzfpPZf3MNjWA9om1VXiVLyIZaHJcAZJTr8udKdclD6LJdcQaNZY5eIciuefyNWVuXlSK3b+yb2Ww7vNvNmS28AObJ8Ccj3HHSiuqBF8ZKX0Vz0i1753i1BlaQKvDBOQTjONl3PM7U+0w3Bs4zdFxJv7WQxGds464o9ZoUy0dtGp642oOW4ZpGPCOdVxwkP5PlRyaoJuLsG3Z3HdQL4jpXtLtHlmF9dpwPjEEJGO7U/iP7RHy5eNYsIJL0xzzgrbIeKCI/jP67fwHx8nAAFTb+iKVGAMVtXq1J8aUJrKx5DHKkF1/1moRxbGK2xM/gX/CPhuacXDgKSTjO2c0i7N2019G97cxlIJ2MiI2xkz7JI/VAxt5mgPHSsbiOPUrFAS0lueY5CXHj4r+dT25laQB1CIowFA2qZmSJPWYACqz2q7baRoChLqdjMdxDEnE5+HTzOBWsCTl0WZ3jUHjZQPeaXT6/pkB4GvbcONsGUCuJdqO3Wqa7GYrMvY2Z2Kq/ryZ/WP8AKkUVghCkplj1NCyixfZ3a/7Z6RaqWl1O2UA7iNuM/IUvH2h6VJbzT289xKkKguVhI4cnA54Fcri0pHJVY1GxJIHIAZJqzDSRY9klJUCS8nVjgfgAPD/Okcy0cEQ+5+0a6vrkQ6VpoBIY97dsTsATnhXHh40usvtH1iNiLzTrSbIBAiLIR5kk1v2c0xnubluD9HayAHxLDFKY7ImVvV27sYPxOfzFDmP+JfQfffaPrhObaxsrdfFw0jfPIH0pLqPaftPKsUg1WaPvVLAR4UDfHIVPcaeTEfVzvUuoafnRbCdRyaWFvdhsj6Z+VbkD8ddENn2+7TaNcFbiVLxE9pZ13+BGKuNh9rGmSRKbqO8gmPNAA6j41TO0elt3sE6JmO5tI5M+BCgN8sVW1ty9uu26inTJzjR9E6F2nsNate/sZhMq7NgYZfMdKbkmRVeE+YNfM2kX95o9wt7p8zxSrs/gw94613PsRr76zo0V7KgSUkpMgOwYdR5jB+NUqkRcfoevbyQym5tx65P3kY2WQfwYePXl5B3DJb6vGqNhLwFgD0defzH5U3ctwAxgMffSLXSTf2CMm6zLIjDrzRx8mHzpWCHZYF3UGg9XsRfWhRW4JkIeGT9Rxy+HQ+40VAcxrW59/KiJ7E2mkX1l3nCY7hSVlQ/hYbEfD+udBv6rsG55o+b/AMP1ZbjYW96RHLtssoHqt8RhT5LRLwQzMWLcJzgjbnVseXiJOIdgeFerNeqI5ionbfepCcDNCTvzxzrBQNcr6VKLX8L5DFf1Ov8AKmJKxR52CqMAYoHS/vJ7l+isEHwGT+dZvZgZGDHhRBvnlQGq3Qm7Wa2ukaNdagzKHRcRK/IueQrjvZe2g7V9oJG7QXdwJpx90YhnifqDscDANZ7ddqJe02pGG14l0+AlY1O3GRzehbC3vdOjtb+ISwKcmCcDGSOeD86nPaovCI97d6HYafqlmmmGL0d43JiRslXTAOfPi+hryWFpxQ93JJI3ACxGyg45b+/H1qLTbSO5eS4vrkRxxoXkkfmWJ+p50uuu0jWbM9laCe1EhWO5nBAZuowNjjz86SNpUWSpWy7aN2V9MSMnvU75tyGIxGP5nHypz2h0e4tbOBfTpZ4FfZZVBK+RAFc0svtE1iKRcWlnKOiQI0Z+hNdP7GdpYO1FiYL4qbtd3hIxjy8aPHQryfJNE3ZKx4UuzjBcKu/iP+aS3OlNbSXMfAR3EgO4/A2R/wBo+VX+2t4bcHu1C53P5V6azilYPIvrcPCW8RW46Ms6U39HNZLZHBUKVPI+dbR28lzpV3p8dnNNIHWaIxqOFSPEk9cEH3GrjL2cQ/o3wOlY0/R5NNvFn7xTHurr4g0qTKvLCtFRRJbzRLZk024kawkZZGymODfiUjizy25VUp9LFtftb+uIpTxRtIOElG9kn6Zrp03aLQdOvrgC+tFaT9LEbmNSGHXBPOleqWum6/pyPpkmCOI2xYYDDqqnkR4YNNdE18nRzWPT5pLo2iREysSFQ8yd/wDj4VevskkEEmp6fNlZkZWKMc4AJB+pFVnUrhzdCaItDJu54CQVY8PEP8QNN/s1ye1MpJzm2dj7zkfzroTuNkJKmdhtwDGQeWaC1uJSlrLyMVymP73q4/zUdbD7vPjQPaZu50W4uB//AD8M58kYOfopoEV2GWzAIB8KmkDFSFODQ1vgxqR40XQQJLYNf2iXlo9vLnDjGRzU9CPKq5HfCMvBqBRLmFuCTiOOLbZh7iCD8athFK9T0DS9UuFnvrZZJAoQNk8t/wCdMnRtPsa16sZGcVhjhTQAaythSKXzMBknkN6JmbApXfyse7t4gTLcPwJjoOZbyA3+XjSsdIO0WMpYLI3tTMZT8eX0xVW+0XVxpfZq+mX9LODDH5ttn5VcpWWGHC7bcKiuZ/aLbtrbWGl2YM+8ruIxxKH4CEBI2HrEfKtTNHuzk1pHwwLn2jXU9csO7+z3S3cHZIif7w/3qmXnZTWdKhElxaExoN2iYMBXTO30YtexltbrtwtEgHuAH8qWcX7OrFOnr2VjsvoMWvXYgklCxRIJCpO752wPlWO02irH2tjnmbvbbTwnBZ8ChCi7kAHbei+xURle74ZmiYQoQytgjBbcH40x1OKe4vopZ54jc4AHAp4pMHA26nxxUtJF3Fza+jk2tanY3upC80W0nspi4VYWKtjC8IwB+Lard2H0q+tu0M/BE3GsayRyhwQZc+sMjGx5Yxt8KuS6Yt7NL3en2cd6iD74xKWGehOP62q26XaRwRRu1tBDcCIRuYRsQKaLtUc+SP43+w1DlQd9xmtxWOVa8ag4JGTypyBsdt/AVy77UdZlTTZO/keOCR+7t7dW4e+8Wf8AZx0611LPlVM+0GwSWGzn9HSQK7KTwAlcgY/Klkh8fZxXW+z+paLHBJexqFmUlGTJXpzPxqfSDqFhqSR6FOz98Cyq64juCBupHJjgdKsGtdn+0eqO81pqE09lMuBbyXJHCB+HhzjGRmnXZjsHI40+5fuy9rc+vNHK2zcycZx7uVaL1THcZRd3RXJtQXVIRduqR3LhlliGfVIIAznx51Zvszh4tcup8nKW2APHLDP8PnQXbWytbLX7lYpELSoGn7vlxnPTxIwTTX7OsJeKFOS6XGT447jH/dTwdKg5Va5HU7Y5hX5Vm7hW4tZoJPYkRkbyIxWLVSIVyKlbkac5PYp0F3bRLF5P0jQJxefCKaocigtOQRWFsi8hEv5UUntUEFkter3WsiiKQtKsRVHPTnWpfjUEHY16ZEkxxDJHKsDA2wBWCQ3Z+789qE04Ibq6u5CvDCO5Vj0GxY/E7H90URduP0fXOaUg8QMakmBWZ8Y9tyST8By/43MI8nQZSUY2Q3l2+oXLd6/dWKbcPF60x6cQ6L7uud9tjK0kVvFxZWOIcugpbprGU3sXeL3olDkYzwgjrW9/bHUdSsrLvjCuDKGXmSBjA9+Ca6+Kxxs5rc5UaXGo2t9mxt3LSySKhypG2RxD5U27S2sVzDZxXEcckXfjjVwCD6pxUBso7Ps7chF9a2LsPEcLlhv44xTe4t7fUbZVmXjTIcDJG/mK45ZOUraOxQUFUSl6Zosmm67INORbm3lhdTHnHcklSOI+G2PHfl4vpI/RJu6twl1qsiYaV1xHAniR0XwXOWPzBd9cLZCOxsIkSaQF8Y9WNeXGfE+A6nwAJqPSFSFpbYvxv+kLn2pMkjc9Tt+VK4X8ktDrJ6bJ9OsEs4iqszyMeKSRvadupP8AKmCDFYVcbVvSmbs9mtCil1YgEqdj4Gh4bR7d2ME7LGxJ7pxxKpJycdR5VKwuFH3Zik/ZfK/UZ/I1hSb8qilQMp4hkeFRwi8MvFOII4wpASNi5Y7bkkDHlip2XOazMtMrurRqsUjrC/qjI7s4yMjP0pVaaYkqghrmGG4yXjLeq/P2gOdXCWMnoCDzqqdudbTQdFkYMDdTgxwr1zjc/Cpcd6OyOW40zmGo3K3N3cSRYEbzEKAPwDYflVx+z8BL+0UqQ2Lkn90rAVP0b5Vz+DIVVY54F9Y+JrpXZdYP7U0K6STAn0poeDxkjOD+f0q0SE3dnUExwjHLFB6xIfQZIYn4JZ/ukb9UnmfgMn4UVAcxKR4Usvn4tVEZAPd2/Ep8CzEf9tOcq2wu3wIlCjA5AeAqUHFaQqFiVRyFb0EOyVWzW1QocNUuaIjQJ38XDxd4MVBLeKNoxk9DSqyuo7y2SaE54tiDsVI5qR0I5EUQGCjLeyNzimoeiGW6724e3RuIqB3zeGdwvnjfyIPUZzsMAbAbCl2kkrprXUi/eXDvO3xOw+C8I+FFWlwlymxHGBlh4V14oKMbOTLO5UCpF3Gsu6jAnjwcdSP44/Kpb9JY5Yrm2AM0J4gDyPjn4Eip7mHvuEqeGRTxI3gazFk+vInBIBg77VR7Jp+xWO0KLPqPeo8dtLGCwkH6OThwy+ByACD1ozTLu40uwtG1Pu1txGiNMJMlWwNmXH5ZrFxpkUzNIjyRSkEccbYyDzHlUdto1tA6OxZygAUO5IXwAydvhXG/F+Xejv8A/XHhSWyaC4a/v577hZIWRY4Q4wSqknJB5Ekn5CkPbHV7nQTYX1rOouOJ42Qj1ZUOCcjwGB86ey8Nm5nmlwnsqgXfPgBXK+2mtSavq4wx9EizHGvTPVvpVM1Qx0iHj3LJyOo9l+22ma4EhkcWt7sO5kb2j+yevlzq1A5r5+0Ds8+telMt0sAtgrvkZ9U53+ldJ7NS6tp9qYpb9r1EchPSV3I9x58/GuNqlyZ2qHOVR7LxWaUw69DgC6hlhPiFLr8xv9Kmk1vTEUk3kTHwQ8R+Q3pbQHjmtUMKwSOpqk6n9qHZ+0JS39Iu5Rn1Y4yo+Zqoa19p+r3jdzp8MdjGRkv7b/XYUQcX7Om9ou0Gl9n7T0jU7gR5HqRLu8h8FHOuDdodfuu0+sm8uQUjXaKIHaNeg8/Glmp3c97dNNdyvO59p3Ykmt7ZO7XHVq1DddBoIEMjDqNvyq5dmGc6ZDqCcWdICH/HK/H/AJOE1TJMCNFH4mAx7q6P9myi403UtOlUFJl4hn3jhYf6ayC+jpemycaHfI2I8jQV4P8Axpj09HQf5mobsRO02kqsh+9gzDJnnlSRn6Zo/UAovgfxGID6mn9HP1IKhPFHW9D2rZBXwoisE9Xsnxrx2BJ5CsKwZQw5GsAB/syG4g7xfublt2lTmTn8Q/F8ar+rvfW0v9ntLbytKAGeIEMinxHQnenR1Jre1CoE48HGTnzNItMiae5e7lJY8RPE25ZvH5be6urHhttvpEJZaVDNUVEEYHq8OB5V4KiAAKAPAVtXq6Ec7d7NArBy2Tv0rbFatIq8yDWneO59UYFajG7gEjhbDD41FLBJIP8AzUy/uhR/CpETByfa8ak6b8/Gt0ZFP7azxaPpIWORmurnMcOTuB+Js+7+Nc3uFzbjG5UinXbbVF1TtNMqNmK1XuY8Hbb2iPjSyGPv+9izhipx/hz+dednnyken48OMRr2NuUttYjin2hug1pNnbAfYf5sD4muvNa+kW0VwN3ZB3ij9bkfrmuPXdqTDbXkey3cYcEfhcDB/nXXuyl+b2w4zjLqsuPDiUZ/zcVLKNrixlJxfOBBJAw5UPPEzI68iykA+dWSe2WTfkarPaG8WyWWBXCvGnHNL0hXn/iPQfGorG29HVHylWzlfbe2tLbU1gtYkWSOBVlKDYsSfrj86ROvdhm+FG6nKbq5abBUSvxBSdwOg+WKCvCRiMcycmqvs5mCwR8T8Tbii0AZtulaFe6jCjmeVb57tNhluQHiaNCkgJadfBMr8SM10rsAUttSEbHAubNXiHiQRxfVW+Vc3gTEJ6skuSfHYZ/OrzoqyHQo9Qtc+k6ZcZPviff/AFBvgTSj+joXZUd1quuQD2e/SYf3l/8ArRd+4Optg54YlU+45Jpd2Su4bqTV9VDcMLug4mOAAqb/AJ1JaSNc99eOCO/kLKCN+Hkv0H1pvRGvkNLNhx4PI0TKzICUGfdSxXZCCppjFMkqZBweoooBi3LsHMmRk7A1LgeVatKiD1mHzqH02L9o/CjQCpRs10moXPNVc28f7qe18eIn5Uxsk4LSJevCCfjQemRNF2fi4/bkhMrfvP6x/wBVH25zbx9fVH5V6Mb4HFP+RpNe28R4WlGR0XnQMuovOSsY7tR8zRU2mW0hLANGx5leRqP+ylXlK+PeBVIuBN2etkLjidh5k0cCijAI+dCLZsuwZWFTLbkbsRj3UHQUSCRc43P7oqpdu+1a6TbmwsnDX8o4Tg/ogf40w7Xa3FoekSSLIVlYcMYA9Zm8Af49K4tDJJdTSXMzF3Y5LGuXPk46R04Md/JhGmK0t0FYks5PM53phaerfE/sj6Y/nUfZ2Li1eBf/AHMVLb/+bz4kr/l/2rz2ehEtNlam67GK+N4eJkx+z0+WfnVo7BXHCLSLOAYXHnhzj6GoeyloG7MTRSHCBjuehK/80D2VSdbXSjCB3rwtxZ/ACfa+nL310f7F+0iKfC76ZetR1CQP6PZFDOfakbcRDx958BXMe2V+ry/2XaMWiT17l2b1nc74J6k+0fdw1ddWuYtI0iecDi4QTnPrO3v865xDZyS2V9f3Z4ooiTI+f0s7YwoPxyfAY8aM1+KNexMf+SV+hCcSTMw5DlQrKZJyTvijghjiZsHGMAkUKiOQFiGZJDgA/X6VFHRJEIHGxkf2F9UedetV76UzP7C7LWLwhUSKIHu8ZDH8Y8fjR1t3aWCRsv3jPxN8v96qlZKyO3b/AKieN+TvjPvwD/Grn2A1KG1uJ4LsjuZomSTPLiXcfx+dVjQrFNW1eawLFDIhdWH4WCjHwraOSWwvzFdRnvI3AlToxHI+RxipyRSNNF50G4ulD6bIhFsjemC1dSGmTbC58BswHU4B2zV8jKyxK8eCjAMuB0PKq9d3Vtca72Z1i1H3N2DbuoHI4wAfix/w1Z5rVrMO8EbyQczDGAWTx4R1Hu588ZzijSJSkDutREb1JHdW86loJFI6g5BXzB3B92KHubyCBjH60suMiKL1mb4dPMkCnSFfZuSFUkkADck9BSl7vV7tjJpNvbeij1Ve4Ygv7x7v5U3stNlvws2pGJYTutpE3EP77fi8gMedO1t4gNo0x02rWgNpf9KjpE3e2no8v6SDMTZ642/hRdqhjhETZ9QnBPUdKVX8cun6gs6qVS5GVOPxjYj4gD5GmllcC5QldmHtKfzr0f62jhlp7J69XsitXdUHE7cI8TSmNqE1G8js4Wd3VeEZZmOyjxoe81aKGN3UgIo3kfYLXKu2Xao6mTZ2UjG3zl3z+k/2pMk1jWx4Y3N6F3ajWX7Q6sZlDCzhysQJ6frfH+VCafIoSXESks2AzdB7v50IPu4B4vRFiMI3vO1ec5OTtnoxjx0P+zgjS79Jx6ttbyyufeOI/wDxFRWETO9uuD3jk48yMD86iicw2Mluuz3RVCf2AeJvyUU47PRB9fsiwzHCrzye5UHFn5qB8aR9llpHS9FtSezd/DDjvZ5JY4CdxxElVPkOfkDWmh6TKkTtZoEiYhEbYtwDYYztvji+NFWayWHZK3KHF1IixwE/+rIeEN8OLPkDRK62tpapNDaAabEg4XDesIwPaxjljfHPHyq0E10ck5bplX+0GxNvZWUQ4pLq6uQiBmzjGT+fOlvbW3XSNC0nSoiTxcUj+LleZPvLPn5VYu3kn/5B2ayR3fpRJB5bo2/zxSL7VPV1ewjzslqf9X+1LJtu2WhpJFMvr1ptMt7TgAWJ/VI6g+P1oGYLDaMRjvJm7oEnkg9r57D4HxqcjPAOgJb+vnS64dnCjopOPiaER5A5Jnm7w/iIwPADYUYvOh4Uw6gchU8hZVPdoXfOEQc2Y7AD44q66IMbdiruG07UW9xOfUMpiOemVAB+dWn7StETia9tTllQNt+Jeo95H8qo1/btZ381kCGS1CWzSp1lVfXb4vxn5V1q2P8AbHZi0nkUFngVmB/dwR+dGMOXYk58WmijdjtZc3OmafcHMS6nDcRZ/DzVh8cg/Cu3emw+DfKvnO0k9AvI5rc4NvNxJn9lsj8q7jLexppvpqrlWjVkTPMtjhHzIFLGGthyJtqgnVFsruRGeFZGAzxFcZ92aSXiQGVbG0jEUIXjm4Ni36oJ59N6jaKWb1rqeR5ObcDFQD1Ax0qSKFYndgzsWwMu2Tgf81pTVUjuw+I4S5SZtazDSrmOeAlISwWWMeywJxn3GrZ6bCuxOPp+dU3Ud7YqBlnZVUe8kVYAf2j88UIRT7JeelFprs//2Q=="
          alt=""
        />
      </div>
      <van-form @submit="onSubmit">
        <van-cell-group inset>
          <van-field
            v-model="state.nickname"
            name="昵称"
            label="昵称"
            placeholder="昵称"
            :rules="[{ required: true, message: '请填写昵称' }]"
          />
          <van-field
            v-model="state.username"
            name="用户名"
            label="用户名"
            placeholder="用户名"
            :rules="[{ required: true, message: '请填写用户名' }]"
          />
          <van-field
            v-model="state.password"
            type="password"
            name="密码"
            label="密码"
            placeholder="密码"
            :rules="[{ required: true, message: '请填写密码' }]"
          />
        </van-cell-group>
        <div style="margin: 16px">
          <van-button
            round
            block
            type="primary"
            color="#7232dd"
            native-type="submit"
          >
            注册
          </van-button>
        </div>
      </van-form>
    </div>
    <p class="register" @click="login">已有账号？点这里登录</p>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { reactive } from "vue";
import axios from "../api";
import { showSuccessToast } from 'vant'

const router = useRouter();
const state = reactive({
  username: "",
  password: "",
  nickname: "",
});

const onSubmit = async () => {
  // 发送请求把username、password、nickname传给后端
  console.log(state.username, state.password);
  const data = await axios
    .post("/register", {
      username: state.username,
      password: state.password,
      nickname: state.nickname,
    })
    // .then((res) => {
    //   console.log(res);
    //   if (res.data.code === 200) {
    //     router.push("/login");
    //   }
    // });
    // console.log(data); 
    showSuccessToast(data.msg)
    setTimeout(() => {
      router.push("/login");
    }, 1500);
};

const login = () => {
  router.push("/login");
};
</script>

<style lang="less" scoped>
.login {
  width: 100vw;
  height: 100vh;
  background-color: #fff;
  padding: 0 0.3rem;
  box-sizing: border-box;
  overflow: hidden;
  position: relative;
  h1 {
    height: 0.6933rem;
    text-align: center;
    margin-top: 1.12rem;
    font-size: 0.48rem;
  }
  .login-wrapper {
    width: 7.44rem;
    height: 10.77rem;
    border: 1px solid rgba(187, 187, 187, 1);
    margin: 0 auto;
    margin-top: 1.7rem;
    border-radius: 0.3rem;
    box-shadow: 0 0 0.533rem 0 rgba(170, 170, 170, 1);
    .avatar {
      width: 2.4rem;
      height: 2.4rem;
      overflow: hidden;
      border-radius: 50%;
      margin: 1rem auto 0.77rem;
      img {
        width: 100%;
      }
    }
  }
  .register {
    position: absolute;
    bottom: 30px;
    width: 80%;
    left: 50%;
    text-align: center;
    font-size: 0.374rem;
    transform: translateX(-50%);
    height: 0.6rem;
    line-height: 0.6rem;
    color: rgba(16, 16, 16, 1);
  }
}
</style>

<style>
.van-cell__title.van-field__label {
  width: 45px;
}
</style>
