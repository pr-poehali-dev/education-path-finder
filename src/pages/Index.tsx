import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-primary">EduPath</div>
            <div className="hidden md:flex gap-8">
              <button onClick={() => scrollToSection('hero')} className="text-sm font-medium hover:text-primary transition-colors">Главная</button>
              <button onClick={() => scrollToSection('features')} className="text-sm font-medium hover:text-primary transition-colors">Возможности</button>
              <button onClick={() => scrollToSection('pricing')} className="text-sm font-medium hover:text-primary transition-colors">Тарифы</button>
              <button onClick={() => scrollToSection('cases')} className="text-sm font-medium hover:text-primary transition-colors">Кейсы</button>
              <button onClick={() => scrollToSection('about')} className="text-sm font-medium hover:text-primary transition-colors">О продукте</button>
              <button onClick={() => scrollToSection('contacts')} className="text-sm font-medium hover:text-primary transition-colors">Контакты</button>
            </div>
          </div>
        </div>
      </nav>

      <section id="hero" className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/10 pointer-events-none" />
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Помогаем выбирать правильные курсы и строить свою траекторию
              </h1>
              <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
                Интеллектуальный сервис, который связывает компетенции, дисциплины и карьерные пути — чтобы студент учился с пользой, 
                а вуз получал глубокую аналитику по образовательным потребностям
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8 py-6">
                  🔵 Попробовать демо
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                  Для вузов — запросить презентацию
                </Button>
              </div>
            </div>
            <div className="animate-scale-in hidden lg:block">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-2xl" />
                <img 
                  src="https://cdn.poehali.dev/projects/a1204b55-16d8-4181-906c-26f3ad59a3a5/files/92ea81ae-b740-43bb-8c6f-c0dc52a6b80e.jpg" 
                  alt="EduPath интерфейс" 
                  className="relative rounded-2xl shadow-2xl w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="problem" className="py-20 px-4 bg-secondary/30 relative">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <Badge variant="destructive" className="mb-4 text-sm px-4 py-1">Проблема</Badge>
            <h2 className="text-4xl font-bold mb-4">Хаос в выборе курсов</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Студенты теряются среди десятков дисциплин, не знают, что выбрать и как это влияет на карьеру. 
              Университеты дают список курсов, но не дают траекторию.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { 
                icon: "EyeOff", 
                title: "Непрозрачность", 
                desc: "Нет связки «курс → компетенции → профессия»",
                color: "bg-red-500"
              },
              { 
                icon: "Users", 
                title: "Отсутствие персонализации", 
                desc: "Все студенты получают одинаковый набор рекомендаций",
                color: "bg-orange-500"
              },
              { 
                icon: "Shuffle", 
                title: "Интуитивный выбор", 
                desc: "Решение «наугад», без данных, отзывов и анализа рынка труда",
                color: "bg-yellow-500"
              },
              { 
                icon: "AlertCircle", 
                title: "Нехватка информации", 
                desc: "О содержании курса, преподавателях, опыте реальных студентов",
                color: "bg-rose-500"
              }
            ].map((item, idx) => (
              <Card key={idx} className="animate-scale-in hover:shadow-xl transition-all border-l-4 border-l-destructive hover:scale-105">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className={`w-14 h-14 ${item.color} rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg`}>
                      <Icon name={item.icon} className="text-white" size={28} />
                    </div>
                    <div>
                      <CardTitle className="text-2xl mb-3">{item.title}</CardTitle>
                      <p className="text-muted-foreground text-base leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="how-it-works" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-16">Как это работает?</h2>
          
          <div className="space-y-16">
            {[
              {
                step: "Шаг 1",
                title: "Анализ профиля студента",
                icon: "UserSearch",
                points: [
                  "Интересы и карьерные цели",
                  "Уже освоенные курсы",
                  "Навыки и их уровень",
                  "Актуальные компетенции на рынке"
                ]
              },
              {
                step: "Шаг 2",
                title: "Построение образовательной траектории",
                icon: "Route",
                points: [
                  "Рекомендует курсы, дисциплины и активности",
                  "Показывает, какие компетенции закрывает каждый модуль",
                  "Формирует прогноз: куда приведёт выбранная траектория"
                ]
              },
              {
                step: "Шаг 3",
                title: "Поддержка на всём пути",
                icon: "TrendingUp",
                points: [
                  "Отзывы о курсах",
                  "Трудоёмкость и содержание",
                  "Альтернативы",
                  "Визуализация прогресса и карьерных перспектив"
                ]
              }
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col md:flex-row gap-8 items-center animate-fade-in">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center">
                    <Icon name={item.icon} className="text-white" size={36} />
                  </div>
                </div>
                <div className="flex-1">
                  <Badge className="mb-3">{item.step}</Badge>
                  <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                  <ul className="space-y-2">
                    {item.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={20} />
                        <span className="text-muted-foreground">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="features" className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge className="mb-4 text-sm px-4 py-1">Решение</Badge>
            <h2 className="text-4xl font-bold mb-4">Возможности платформы</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "Target",
                title: "Персональные рекомендации",
                subtitle: "Алгоритм подбирает курсы под цели",
                benefit: "Не тратят семестры впустую"
              },
              {
                icon: "Link",
                title: "Курс → компетенции → профессия",
                subtitle: "Визуализация связей",
                benefit: "Осознанное планирование карьеры"
              },
              {
                icon: "Star",
                title: "Отзывы и рейтинги",
                subtitle: "От реальных студентов",
                benefit: "Уверенность перед выбором"
              },
              {
                icon: "BarChart3",
                title: "Аналитика для вузов",
                subtitle: "Отчёты, граф компетенций",
                benefit: "Обновление учебных планов"
              },
              {
                icon: "Compass",
                title: "Визуальные траектории",
                subtitle: "Карта навыков и шаги роста",
                benefit: "Видимый путь развития"
              },
              {
                icon: "Zap",
                title: "Интеграция с LMS",
                subtitle: "Единая точка доступа",
                benefit: "Удобство и автоматизация"
              }
            ].map((feature, idx) => (
              <Card key={idx} className="animate-scale-in hover:shadow-xl transition-all group">
                <CardHeader className="space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/60 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Icon name={feature.icon} className="text-white" size={32} />
                  </div>
                  <div>
                    <CardTitle className="text-xl mb-2">{feature.title}</CardTitle>
                    <p className="text-sm text-muted-foreground">{feature.subtitle}</p>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="pt-4 border-t border-border">
                    <div className="flex items-start gap-2">
                      <Icon name="CheckCircle2" className="text-green-600 flex-shrink-0 mt-0.5" size={18} />
                      <p className="text-sm font-medium text-green-600">{feature.benefit}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-4">Тарифы</h2>
          <p className="text-center text-muted-foreground mb-12">Выберите план для вашего университета</p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Start",
                desc: "До 500 студентов",
                price: "Договорная",
                features: [
                  "Базовые рекомендации",
                  "Каталог курсов",
                  "Отзывы студентов",
                  "Email поддержка"
                ]
              },
              {
                name: "Pro",
                desc: "От 500 до 5000 студентов",
                price: "Договорная",
                popular: true,
                features: [
                  "Всё из Start +",
                  "Траектории развития",
                  "Глубокая аналитика",
                  "Интеграция с LMS",
                  "Приоритетная поддержка"
                ]
              },
              {
                name: "Enterprise",
                desc: "Индивидуально",
                price: "Обсуждается",
                features: [
                  "Всё из Pro +",
                  "Кастомизация под вуз",
                  "API доступ",
                  "Отчёты для аккредитации",
                  "AI-модули",
                  "Персональный менеджер"
                ]
              }
            ].map((plan, idx) => (
              <Card key={idx} className={`animate-scale-in ${plan.popular ? 'border-primary shadow-lg scale-105' : ''}`}>
                <CardHeader>
                  {plan.popular && <Badge className="mb-2 w-fit">Популярный</Badge>}
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription>{plan.desc}</CardDescription>
                  <div className="text-3xl font-bold mt-4">{plan.price}</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Icon name="Check" className="text-primary mt-0.5 flex-shrink-0" size={20} />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-6" variant={plan.popular ? "default" : "outline"}>
                    Запросить доступ
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="py-8">
                <h3 className="text-2xl font-bold mb-2">Для студентов — бесплатно</h3>
                <p className="text-muted-foreground">Оплачивает ваш университет</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="cases" className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-16">Кейсы и отзывы</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {[
              {
                quote: "Я наконец понял, какие курсы реально нужны для моей специализации.",
                author: "Александр, студент 2 курса",
                role: "Студент"
              },
              {
                quote: "Перестал выбирать интуитивно — теперь вижу карьерную пользу.",
                author: "Мария, студентка 3 курса",
                role: "Студент"
              },
              {
                quote: "Сервис помогает выявить востребованные компетенции.",
                author: "Иванова О.П., к.т.н.",
                role: "Преподаватель"
              },
              {
                quote: "Мы используем аналитику для обновления учебных планов.",
                author: "Петров С.Н., декан факультета",
                role: "Администрация"
              }
            ].map((testimonial, idx) => (
              <Card key={idx} className="animate-fade-in">
                <CardContent className="pt-6">
                  <Icon name="Quote" className="text-primary mb-4" size={32} />
                  <p className="text-lg mb-4 italic">"{testimonial.quote}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <Icon name="User" className="text-primary" size={20} />
                    </div>
                    <div>
                      <p className="font-semibold">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center animate-scale-in">
              <CardContent className="pt-8">
                <div className="text-5xl font-bold text-primary mb-2">+32%</div>
                <p className="text-muted-foreground">Студентов выбирают курсы осознанно</p>
              </CardContent>
            </Card>
            <Card className="text-center animate-scale-in">
              <CardContent className="pt-8">
                <div className="text-5xl font-bold text-primary mb-2">+18%</div>
                <p className="text-muted-foreground">Вовлечённости в образовательный процесс</p>
              </CardContent>
            </Card>
            <Card className="text-center animate-scale-in">
              <CardContent className="pt-8">
                <div className="text-5xl font-bold text-primary mb-2">94%</div>
                <p className="text-muted-foreground">Считают рекомендации полезными</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-8">О продукте</h2>
          <div className="space-y-6 text-lg text-muted-foreground">
            <p>
              EduPath — это результат многолетних исследований в области образовательной аналитики и карьерного планирования. 
              Мы объединили лучшие практики персонализированного обучения с современными технологиями машинного обучения.
            </p>
            <p>
              Наша платформа помогает студентам принимать осознанные решения о своём образовании, 
              а университетам — понимать реальные потребности учащихся и адаптировать программы под требования рынка труда.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <Badge variant="secondary" className="text-sm px-4 py-2">Кейс в рамках ИРИТ-РТФ</Badge>
              <Badge variant="secondary" className="text-sm px-4 py-2">Топ компетенций для IT</Badge>
              <Badge variant="secondary" className="text-sm px-4 py-2">Гайд по траекториям</Badge>
            </div>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4 bg-primary text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6">Готовы начать?</h2>
          <p className="text-xl mb-8 opacity-90">
            Свяжитесь с нами, чтобы узнать больше о внедрении EduPath в вашем университете
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
              <Icon name="Mail" className="mr-2" size={20} />
              Написать письмо
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-transparent text-white border-white hover:bg-white/10">
              <Icon name="Calendar" className="mr-2" size={20} />
              Назначить встречу
            </Button>
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-6 text-sm opacity-75">
            <div className="flex items-center justify-center gap-2">
              <Icon name="Mail" size={16} />
              <span>info@edupath.ru</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Icon name="Phone" size={16} />
              <span>+7 (495) 123-45-67</span>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 px-4 border-t border-border">
        <div className="container mx-auto text-center text-sm text-muted-foreground">
          <p>© 2024 EduPath. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;