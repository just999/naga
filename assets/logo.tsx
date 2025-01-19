import * as React from 'react';

const Logo: React.FC<React.SVGProps<SVGSVGElement>> = ({
  className,
  ...props
}) => (
  <svg
    height={100}
    width={120}
    xmlns='http://www.w3.org/2000/svg'
    className={`fill-slate-900 dark:fill-slate-400 ${className || ''}`}
    {...props}
  >
    {/* cspell:disable */}
    <path d='M15.705 49.641c-.237.071-.363.35-.282.622.082.272.34.435.577.364s.363-.349.282-.622-.34-.436-.577-.364zM14.791 48.512c-.237.071-.363.349-.282.622.082.272.34.435.577.364s.363-.35.282-.622-.34-.435-.577-.364z' />
    <path d='m114.677 51.633-3.844-7.9a1.08 1.08 0 0 0-.326-.393l-8.324-6.179-2.099-1.625 1.2-.632a.531.531 0 0 0 .259-.303l.911-2.679 1.914-2.886a.537.537 0 0 0 .07-.438l-.724-2.663.714-2.086-1.018-.348-.767 2.241a.542.542 0 0 0-.01.314l.702 2.588-1.817 2.74a.55.55 0 0 0-.061.124l-.865 2.542-1.218.641.317-3.045 1.614-3.52a1.073 1.073 0 0 0-.208-1.199 1.068 1.068 0 0 0-1.194-.236l-2.886 1.242-1.27-2.139.163-1.503 2.217-2.104a.507.507 0 0 0 .113-.155l2.217-4.575-.967-.469-2.175 4.487-2.288 2.173a.535.535 0 0 0-.164.331l-.204 1.877a.538.538 0 0 0 .072.333l1.291 2.173-.275.118c-.331.143-.568.44-.633.795l-.06.333-.778-.417-1.113-4.96c-.111-.498-.54-.815-1.069-.84-.511.01-.943.377-1.037.88l-1.524 8.235c-.073.397.083.803.404 1.049l1.036.793-3.062-1.068-.285-3.34.985-3.893-1.043-.264-1.007 3.98a.533.533 0 0 0-.015.178l.323 3.776a.538.538 0 0 0 .358.462l3.387 1.182-1.659.649a1.076 1.076 0 0 0 .231 2.064l4.646.697-.634.724a1.076 1.076 0 0 0 .726 1.781l5.209.4 5.322 4.422a9.803 9.803 0 0 1 3.244 5.107 6.81 6.81 0 0 1-3.122 7.552l-.463.272a3.603 3.603 0 0 0-.425-.191v-.966l1.681-3.737a.539.539 0 0 0-.86-.611l-1.564 1.477v-1.086a.536.536 0 0 0-1.01-.253l-1.738 3.248a.538.538 0 0 0 .006.519l.856 1.51a3.581 3.581 0 0 0-.896.538l-.276.234-4.125-2.666a3.782 3.782 0 0 1-1.17-1.202l-.065-.107.027-3.064 3.413-1.445a.538.538 0 0 0-.054-1.009l-4.88-1.478a.535.535 0 0 0-.418.045l-1.734.965-2.375-3.901c-.096-.158-.209-.303-.31-.458l.191-2.793 2.365-.913a.539.539 0 0 0-.015-1.009l-3.844-1.35a.531.531 0 0 0-.392.014l-2.887 1.253-3.498-2.596c-.338-.251-.693-.473-1.047-.697l-.385-2.536 1.784-2.008a.538.538 0 0 0-.478-.889l-5.956.854a.535.535 0 0 0-.297.145l-1.981 1.906a16.93 16.93 0 0 0-2.996-.06l-.555-.939.843-2.695a.537.537 0 0 0-.798-.616l-3.736 2.337a.542.542 0 0 0-.249.394l-.305 2.59a17.105 17.105 0 0 0-3.193 1.626l-.357-1.73v-2.424a.537.537 0 0 0-.983-.301l-3.218 4.759a.528.528 0 0 0-.091.26l-.306 4.021a22.368 22.368 0 0 0-1.91 2.852l-.539-.794v-3.354a.535.535 0 0 0-.417-.523.53.53 0 0 0-.604.289l-1.922 3.958a.532.532 0 0 0-.047.321l.91 5.568-2.548 5.506-3.989 5.254-.389-1.506a.538.538 0 0 0-.873-.272l-1.23 1.068a.537.537 0 0 0-.103.12l-1.448 2.306a1.527 1.527 0 0 1-1.079-1.454v-1.931c0-.767.263-1.52.74-2.119l2.614-3.282.298.489-.44 3.027a.537.537 0 0 0 .954.41l2.715-3.438a.537.537 0 0 0 .11-.409l-.563-3.938.171-.215a4.983 4.983 0 0 0 .871-4.555l-.864-2.843 1.382-.483c.246-.086.452-.258.581-.484l2.333-4.118a1.074 1.074 0 0 0-1.117-1.589l-5.902 1.007c-.057.01-.112.023-.167.042l-3.371 1.152.396-.97 2.274-.404a.53.53 0 0 0 .206-.083l1.786-1.201 2.059.251a.542.542 0 0 0 .27-.036l6.07-2.501-.409-.994-5.94 2.447-2.118-.258a.514.514 0 0 0-.365.087l-1.858 1.249-1.494.265.206-.504.628-.742 4.616-1.768 5.612-2.409a.537.537 0 0 0 .309-.359l.671-2.593-1.041-.27-.605 2.338-5.351 2.297-2.771 1.061 7.292-8.619c.289-.341.336-.825.119-1.217l-.915-1.647-1.88 1.045.554.998-.547.646-10.976 8.944-.095-.503c-.077-.406-.381-.732-.781-.839s-.825.026-1.094.342l-.528.619-.203-.121 6.039-10.054a1.076 1.076 0 0 0-.171-1.324l-1.19-1.159-1.501 1.541.581.564-5.604 9.329-.045-.027a1.074 1.074 0 0 0-1.554.537l-.477 1.239-.477.285.303-2.444 2.279-2.279-.761-.76-2.409 2.41a.57.57 0 0 0-.149.313l-.429 3.458-4.956 2.961-2.808 1.8c-.112.072-.21.164-.289.271l-.818 1.121v-1.696l1.456-2.89 3.071-1.34a.542.542 0 0 0 .255-.232l1.116-2.017 1.327-1.919-.885-.611-1.354 1.964-1.055 1.902-3.082 1.345a.544.544 0 0 0-.265.251l-1.601 3.177a.536.536 0 0 0-.058.242v3.298l-.912 1.249a1.076 1.076 0 0 0 .234 1.502l.531.388-.543.693-.908.303-2.405-.801c-.053-.018-.108-.017-.162-.026v-1.486l1.044-2.557a.532.532 0 0 0 .027-.32l-.487-2.182 1.305-1.722-.856-.65-1.456 1.921a.534.534 0 0 0-.096.442l.505 2.261-1.021 2.498a.544.544 0 0 0-.04.203v2.046l-.002.002-1.602 2.439a1.075 1.075 0 0 0-.084 1.026l1.571 3.538a1.076 1.076 0 0 0 1.152.625l1.861-.297-.656 1.486c-.163.369-.106.799.149 1.112l1.722 2.119v1.718h1.075v-1.311c.06-.012.122-.011.181-.033l.137-.052.734 1.537a.542.542 0 0 0 .266.26l.885.396.438-.982-.704-.314-.611-1.28.658-.251.414 1.282 1.023-.33-.431-1.336 2.864-1.094a1.08 1.08 0 0 0 .307-.181l2.745-2.298.469.647a.536.536 0 0 0 .65.178l2.517-1.099a.538.538 0 0 0 .319-.558l-.095-.786 1.528-.415c.286-.078.527-.271.667-.531l1.587-2.97h.819c.225 0 .444-.07.626-.201l1.709-1.225-.066.797a1.312 1.312 0 0 1-.409.848l-9.725 9.153a6.73 6.73 0 0 0-1.949 6.328l.026.118-1.738 1.343a3.52 3.52 0 0 1-2.86.664l-2.114-.432a1.094 1.094 0 0 0-.515.021l-.461.134-2.475-1.675-3.889-2.295a1.08 1.08 0 0 0-.835-.11l-3.363.938c-.23.064-.432.203-.575.396l-2.318 3.122a1.073 1.073 0 0 0-.062 1.188c.22.372.645.575 1.071.519l3.385-.461-.699.34a1.074 1.074 0 0 0-.6.867l-.442 4.771a1.075 1.075 0 0 0 1.818.872l2.422-2.338.276 2.916a1.075 1.075 0 0 0 1.871.617l2.2-2.454 1.642-.602.871 2.235v2.108a1.076 1.076 0 0 0 1.674.892l3.203-2.15c.332-.223.513-.61.47-1.008l-.248-2.299a5.685 5.685 0 0 0 2.495-1.109l1.152-.9.064.287c.065.296.253.551.517.701l6.405 3.66c.162.093.346.142.533.142h4.071a4.415 4.415 0 0 0 2.946 1.136c.208 0 .417-.015.626-.046l1.57-.23-.399 3.683a1.075 1.075 0 0 0 1.515 1.093l1.772-.809v1.348a1.077 1.077 0 0 0 1.621.927l1.268-.748-.079.894a1.074 1.074 0 0 0 1.818.866l4.06-3.926 3.261-1.123 9.329-.353a1.074 1.074 0 0 0 .776-1.773l-1.071-1.254a5.71 5.71 0 0 0-4.692-1.992c.473-2.846-.708-5.717-2.97-7.444h1.084a.538.538 0 0 0 .427-.21l1.708-2.227a.538.538 0 0 0-.657-.812l-.819.388.48-2.601a.537.537 0 0 0-.828-.544l-3.254 2.187 3.87-8.696 5.763-5.093 6.451-.437 5.236 3.718 4.773 8.019-.769 3.622c-.097.188-.188.369-.273.543-.601 1.204-.898 1.802-1.991 2.321l-3.001-.527a1.07 1.07 0 0 0-.706.117l-2.976 1.644a1.071 1.071 0 0 0-.485.559l-2.118 5.562a1.076 1.076 0 0 0 1.667 1.229l1.896-1.483-.034 2.878a1.075 1.075 0 0 0 1.899.701l1.51-1.804c.102.603.285 1.525.613 2.974a1.074 1.074 0 0 0 1.906.41l1.738-2.3c.022-.03.044-.061.063-.093l2.385-3.951 3.174-.129a1.075 1.075 0 0 0 .701-1.848l-1.935-1.862 1.301-1.855c.103-.147.167-.317.188-.496l.067-.591 1.503 1.588v3.105c0 .517.367.96.875 1.057l1.274.242a6.71 6.71 0 0 0 5.104-1.113l.521-.37 1.14.283a1.08 1.08 0 0 0 .388.023l1.6-.193-.413 2.273-1.378.847-2.526-1.16a1.075 1.075 0 0 0-1.162.174l-2.264 2.01-.701-.104a1.078 1.078 0 0 0-1.029.433l-3.328 4.598a1.077 1.077 0 0 0 1.256 1.635l2.844-1.088-.286 1.064a1.078 1.078 0 0 0 1.038 1.355c.199 0 .398-.056.575-.167l3.703-2.343 4.972-1.775 2.662-.42 4.049 1.099c.397.104.826-.023 1.097-.338s.336-.757.168-1.136l-.581-1.312a5.128 5.128 0 0 0-3.588-2.93l.795-3.215c.052-.212.091-.425.125-.638l4.356-2.796c.158-.103.287-.243.373-.41l2.562-4.94c.092-.176.133-.373.118-.571l-.487-6.894a1.161 1.161 0 0 0-.11-.392zm-13.393 5.526.588-1.097v.189a.537.537 0 0 0 .906.39l.5-.472-.616 1.37a.541.541 0 0 0-.047.221v.885a3.532 3.532 0 0 0-.483.009zm-8.343-7.322 3.24.981-2.37 1.004a.536.536 0 0 0-.327.49L93.469 54l-2.027-3.329zm-6.204-9.425 2.27.797-1.324.511a.539.539 0 0 0-.343.465l-.126 1.843a17.69 17.69 0 0 0-2.644-2.675zm-12.377-6.65 4.33-.621-.976 1.098a.54.54 0 0 0-.13.438l.295 1.944a17.067 17.067 0 0 0-4.776-1.651zm-9.055-.189 2.285-1.43-.48 1.536a.537.537 0 0 0 .05.434l.433.732c-.122.018-.245.022-.367.042a16.92 16.92 0 0 0-2.134.504zm-8.122 4.622 2.155-3.187v.724c0 .036.003.073.011.108l.461 2.237c-.064.049-.132.093-.196.142a22.234 22.234 0 0 0-2.617 2.405zm-5.717 6.54.826-1.701v1.182c0 .107.032.213.093.302l.953 1.402c-.085.172-.176.34-.257.514l-.988 2.135zM43.024 61.12l.514-.446.384 1.487-.074.097a1.538 1.538 0 0 1-1.219.604h-.699zm2.499-7.116-1.33 1.685.18-1.235a.534.534 0 0 0-.073-.356l-.604-.991 1.44-1.808zm-22.101-.066-4.778 1.824-.854-1.051.363-.823.534.619a.54.54 0 0 0 .595.153.538.538 0 0 0 .35-.504v-1.517l.254-.003.666 1.086a.537.537 0 0 0 .994-.248l.086-1.411.269-.149.855.892a.54.54 0 0 0 .555.139.539.539 0 0 0 .366-.44l.224-1.7 1.153-.64 1.087 1.497zm6.826-1.633-1.753.766-.259-.357.182-.153 1.802-.489zm5.276-6.584h-1.118c-.397 0-.761.219-.948.568l-1.672 3.129-.778.211-.309-2.551c.639-1.229 1.375-2.36 1.676-2.581h4.038v-1.074h-4.118c-.257 0-.939 0-2.629 3.312a.55.55 0 0 0-.055.309l.348 2.871-2.331.633c-.15.041-.29.114-.408.214l-.249.209-.878-1.209 2.614-.046-.038-2.15-3.2.057c-.176.003-.349.05-.502.135l-.234.13-.283-.39a.531.531 0 0 0-.556-.208l-3.363.778.242 1.047 2.997-.693-3.719 2.064-2.066.026a1.028 1.028 0 0 0-.156.014l-2.996.479-.997-2.246.826-1.258 1.96.653c.221.074.458.074.68 0l1.555-.519c.2-.066.376-.19.506-.356l.786-1.003.532.389a1.073 1.073 0 0 0 1.061.119l1.779-.767c.008.068.003.134.024.202.163.545.68.871 1.155.729s.727-.699.564-1.244a1.139 1.139 0 0 0-.181-.36l.145-.062c.164-.07.307-.181.417-.32l1.25-1.582-1.687-1.334-1.082 1.369-2.671 1.151-1.437-1.051 2.053-2.813 2.609-1.674 6.894-4.117c.207-.123.366-.312.452-.537l.152-.394.717.428a1.067 1.067 0 0 0-.107.332l-.226 1.692-4.219 1.434.691 2.035 4.85-1.647c.387-.131.666-.47.72-.875l.272-2.039.107-.126.013.071a1.077 1.077 0 0 0 1.736.634l3.459-2.818-.886 1.047a1.089 1.089 0 0 0-.175.288l-1.853 4.543-1.094.374-2.75.15a1.028 1.028 0 0 0-.285.055l-3.935 1.327.688 2.037 3.796-1.28 2.752-.15c.099-.005.196-.023.289-.056l7.223-2.468 3.584-.611-1.018 1.796-6.161 2.154a1.029 1.029 0 0 0-.271.141zM20.84 74.358v-.294c0-.134-.025-.266-.073-.391l-.818-2.101 1.676.225.205 1.897zm4.12-5.352c-.743.58-1.706.84-2.639.716l-2.992-.401a1.055 1.055 0 0 0-.513.056l-3.63 1.33a1.087 1.087 0 0 0-.431.292l-.739.824-.145-1.528.983-.6 1.102-.294-.556-2.079-1.251.335a1.082 1.082 0 0 0-.282.121l-3.218 1.963c-.067.041-.13.09-.187.145l-.462.446.119-1.284 3.437-1.673-.941-1.934-1.055.513-.996-.879a1.078 1.078 0 0 0-.856-.259l-1.519.207.576-.775 2.567-.716 3.438 2.027 2.837 1.922c.264.178.595.231.903.142l.69-.2 1.854.379a5.672 5.672 0 0 0 4.605-1.07l.937-.724.324 1.465zm36.351-8.565-.439 2.378a.537.537 0 0 0 .565.633l-.241.314H58.83v.081l-1.044-.615c-.067-.039-.138-.068-.206-.104l.115-.259zm25.947 3.791-1.673 2.385a1.075 1.075 0 0 0 .136 1.392l.782.754-1.233.05c-.36.015-.689.209-.877.519l-2.655 4.398-.283.375a16.784 16.784 0 0 1-.186-1.08c.189-.454.898-1.812 1.51-2.926l-1.885-1.035c-.174.317-.327.6-.468.863l-2.068 1.69a.973.973 0 0 0-.144.143l-.208.248.008-.719 2.251-2.146-1.484-1.557-1.182 1.127-.172-.041a1.072 1.072 0 0 0-.909.199l-.841.657.603-1.583 2.299-1.27 2.95.518c.205.034.409.014.6-.066 2.064-.858 2.668-2.068 3.365-3.469.102-.203.208-.417.325-.642.045-.086.077-.178.098-.272l.4-1.882 1.182 1.25zm10.001 8.753.582.267-.042.026-.369.14-.565-.084zm-4.367 3.2.828-1.144.316.047c-.016.038-.036.075-.046.115l-.168.626zm15.143-1.697-1.898-.516a1.062 1.062 0 0 0-.449-.024l-2.988.472a1.074 1.074 0 0 0-.193.05l-5.179 1.849a1.085 1.085 0 0 0-.214.104l-1.477.934.286-1.064 2.734-1.04c.063-.023.124-.054.182-.089l4.118-2.531c.26-.16.439-.423.494-.724l1.053-5.795a1.075 1.075 0 0 0-.855-1.248l-2.15-.412a1.063 1.063 0 0 0-.824.179l-3.732 2.648a4.536 4.536 0 0 1-3.458.754l-.4-.076v-5.561h-2.15v.216l-3.75-3.964-1.702-2.86 1.291-1.256a.556.556 0 0 0 .145-.246l.319-1.189-1.039-.279-.28 1.047-1.002.974-3.18-5.342.68-.627a.55.55 0 0 0 .137-.2l.731-1.876-1.002-.391-.687 1.761-.588.542-5.208-3.697.569-1.307a.535.535 0 0 0 .013-.397l-.48-1.327-1.012.365.408 1.126-.505 1.161-7.149.484c-.049.003-.093.023-.14.033l-.307-1.078a.538.538 0 0 0-.254-.322l-1.876-1.048-.525.938 1.683.941.34 1.192-5.773 5.101a1.093 1.093 0 0 0-.271.368l-.01.023-.916-1.39a.541.541 0 0 0-.449-.241h-1.891v1.074h1.601l1.106 1.681.068-.045-2.652 5.959-1.577-.788-.48.961 1.62.81-1.447 3.252a5.29 5.29 0 0 0-2.872.594l-3.634 1.943a5.307 5.307 0 0 1-3.763.473l-1.593-.392-.514 2.088 1.593.392a7.443 7.443 0 0 0 5.291-.664l3.634-1.943a3.135 3.135 0 0 1 3.061.063l1.839 1.083a5.648 5.648 0 0 1 2.685 5.812l-.236 1.348a1.073 1.073 0 0 0 1.186 1.253l1.104-.132a3.58 3.58 0 0 1 2.693.791l-7.2.272a1.068 1.068 0 0 0-.31.058l-3.638 1.253a1.07 1.07 0 0 0-.396.244l-2.159 2.088.122-1.377 2.298-1.801-1.326-1.693-2.666 2.089a1.077 1.077 0 0 0-.408.752l-.105 1.185-.972.573v-2.182l1.835-1.533-1.379-1.65-2.221 1.855a1.074 1.074 0 0 0-.386.825v.854l-.946.432.287-2.642 3.5-2.021 5.897.679 3.001 1.029.697-2.033-.986-.338.498-2.324a1.076 1.076 0 0 0-.492-1.144l-2.806-1.708a1.075 1.075 0 0 0-1.239.085l-4.417 3.607-.261-.03a1.087 1.087 0 0 0-.661.137l-4.103 2.369-2.739.401a2.243 2.243 0 0 1-2.17-.961l-.348-.518a2.222 2.222 0 0 1-.344-1.64l.555-3.073-2.116-.383-.555 3.073a4.354 4.354 0 0 0 .244 2.388H35.88l.378-1.134a.518.518 0 0 0 .028-.17V68.7h-1.075v2.353l-.385 1.154-4.751-2.715 1.5-.666a.537.537 0 0 0 .218-.177l1.586-2.196-.872-.629-1.501 2.078-1.628.724-1.222-5.516a4.526 4.526 0 0 1-.06-1.568l1.808 1.01a.543.543 0 0 0 .506.009l1.708-.869-.487-.959-1.453.739-1.804-1.008a4.54 4.54 0 0 1 1.104-1.652l9.725-9.153a3.46 3.46 0 0 0 1.078-2.236l.218-2.619.721-.517 2.983-1.043.838 2.758c.271.893.086 1.86-.495 2.59l-5.859 7.357a5.575 5.575 0 0 0-1.208 3.458v1.931a3.684 3.684 0 0 0 3.68 3.68h1.47a3.702 3.702 0 0 0 2.931-1.454l4.962-6.535c.047-.062.087-.129.119-.199l4.39-9.488a20.132 20.132 0 0 1 5.901-7.417 14.852 14.852 0 0 1 6.646-2.91 14.886 14.886 0 0 1 11.258 2.716l3.797 2.818a15.573 15.573 0 0 1 4.038 4.427l6.085 9.994a5.976 5.976 0 0 0 1.838 1.89l3.582 2.315-.554.471-.938-.572-1.119 1.836 1.602.977c.396.241.901.201 1.256-.099l3.133-2.663a1.44 1.44 0 0 1 2.173.36l1.309 2.19a5.401 5.401 0 0 1 .61 4.094l-1.095 4.429a1.077 1.077 0 0 0 1.044 1.333h.247a2.935 2.935 0 0 1 2.191.957zm-51.578-3.03-.077-.026a1.076 1.076 0 0 0-.226-.052l-3.124-.36 2.207-1.803 1.504.915zm54.534-8.612-.942-1.114-.82.693.975 1.154-2.373 1.523a7.583 7.583 0 0 0-.948-2.537l-1.178-1.972c3.395-2.022 5.071-6.095 4.077-9.923a11.959 11.959 0 0 0-3.951-6.221l-5.586-4.641a1.073 1.073 0 0 0-.605-.245l-3.406-.262.515-.587a1.073 1.073 0 0 0-.649-1.773l-2.611-.392.8-.313a1.074 1.074 0 0 0 .262-1.855l-2.782-2.131.448-2.422.07.314c.068.305.266.564.54.712l1.824.979-.239 1.312 2.115.385.601-3.301 1.059-.456-.522 1.14c-.049.106-.08.22-.092.337l-.427 4.087c-.039.37.117.733.411.962l3.327 2.575 7.521 5.583-.361.415.811.705.311-.358 3.149 6.472-.423.102.252 1.045.532-.128.419 5.932-.894-.092h-1.144v1.074l1.088-.002.49.051z' />
  </svg>
);

export default Logo;
